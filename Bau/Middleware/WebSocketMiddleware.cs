namespace Bau.Middleware
{
    using Microsoft.AspNetCore.Http;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.WebSockets;
    using System.Threading.Tasks;
    using System;
    using System.Threading;
    using System.Text;
    using Bau.Data;

    public class WebSocketMiddleware
    {
        private List<WebSocket> sockets = new List<WebSocket>();
        private readonly RequestDelegate next;

        private List<IBauRepository> repos = new List<IBauRepository>();

        public WebSocketMiddleware(
            RequestDelegate next)
        {
            this.next = next;
        }

        private void AddSocket(WebSocket socket)
        {
            if (socket != null)
            {
                sockets.Add(socket);             
            }
        }

        private void RemoveSocket(WebSocket socket)
        {
            var existingSocket = sockets.FirstOrDefault(s => s == socket);
            if (sockets != null)
            {
                sockets.Remove(socket);
            }
        }

        public async Task InvokeAsync(
            HttpContext ctx) // todo: external service instantiated every time
        {
            if (ctx.Request.Path.ToString().ToLowerInvariant().EndsWith("/notifyallclientstorefreshplanitems"))
            {
                sockets.ForEach(s => SendMessage(s, "refreshplanitemscommand"));
            }

            if (ctx.Request.Path.ToString().Contains("/ws"))
            {
                if (ctx.WebSockets.IsWebSocketRequest)
                {
                    var webSocket = await ctx.WebSockets.AcceptWebSocketAsync();
                    AddSocket(webSocket);

                    byte[] buffer = new byte[4096];
                    var ct = new CancellationTokenSource();
                    await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), ct.Token);
                }
                else
                {
                    ctx.Response.StatusCode = 400;
                }
            }
            else
            {
                await next.Invoke(ctx);
            }
        }

        public Task SendMessageToSocketAsync(
            string message)
        {
            return Task.Run(async () => 
            {
                foreach (var socket in sockets)
                {
                    try
                    {
                        await SendMessage(socket, message);
                    }
                    catch
                    {
                        RemoveSocket(socket);
                    }
                }
            });
        }
        
        private Task SendMessage(
            WebSocket socket, 
            string message)
        {
            return Task.Run(async () => 
            {
                var buffer = Encoding.UTF8.GetBytes(message);
                var segment = new ArraySegment<byte>(buffer);

                if (socket.State == WebSocketState.Open)
                {
                    await socket.SendAsync(segment, WebSocketMessageType.Text, true, CancellationToken.None);
                }
                else
                {
                    RemoveSocket(socket);
                }
            });
        }
    }
}
