#asp-net-core-mvc-ef-core-angular
An example of an application using Asp.Net Core MVC and Angular client. Based on fragments of Pluralsight course:
https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents.

Projects supports:
- simple JWT authentication support
- simpel notifications from server to clients based on Web Sockets

Client side event support (Type Script) from:
https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540

Web Sockets support (translated to C#) from:
https://medium.com/@dsincl12/websockets-with-f-and-giraffe-772be829e121


###How to build and run
**git clone https://github.com/zbigniew-gajewski/asp-net-core-mvc-ef-core-angular.git**
**cd asp-net-core-mvc-ef-core-angular**
**cd bau**
**build**
**dotnet run**

Then:
**open browser with http://localhost:8888**
**login**
**'Go to Engineer List'**

###In order to check web sockets:
**repeat above steps**
**navigate to the same month (which is empty) on both browsers**
**click 'Generate Plan...' button**
Both browsers should refresh the plan.

