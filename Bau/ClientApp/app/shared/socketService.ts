// todo:
// improve based on: https://github.com/daviddoran/typescript-reconnecting-websocket/blob/master/reconnecting-websocket.ts

import { Injectable, OnInit } from '@angular/core';
import { DataService } from './dataService';
import { LiteEvent } from './liteEvent';

@Injectable()    
export class SocketService  {

    private socket: WebSocket;

    constructor(
        private data: DataService) {        
    }

    public init(): void {

        this.data.OnLoggedIn.on((username) => {
            this.start();
        });

        this.data.OnLoggedOut.on(() => {
            this.socket.close();
        });       
    }

    private start() {

        this.socket = new WebSocket('ws://localhost:8888/ws');
        var data = this.data;

        this.socket.onopen = function () {
            console.log('INFO: WebSocket opened successfully.');
        }

        this.socket.onclose = function () {
            console.log('INFO: WebSocket closed.');
        }

        this.socket.onmessage = function (messageEvent) {

            var messageData = messageEvent.data.toString();
            console.log('INFO: Message received: ' + messageData);

            if (messageData.endsWith("refreshplanitemscommand")) {
                data.refreshPlanItemsCommand();
            }
        }
    }
}