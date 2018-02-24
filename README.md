# asp-net-core-mvc-ef-core-angular #
An example of an application using Asp.Net Core, MVC, Entity Framework Core and Angular.<br/>
Based on fragments of Pluralsight course:
https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents.

Projects supports:
- simple JWT authentication
- simpel notifications from server to clients based on Web Sockets

Client side event support (Type Script) from:<br/>
https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540

Web Sockets support (translated to C#) from:<br/>
https://medium.com/@dsincl12/websockets-with-f-and-giraffe-772be829e121


## How to build and run ##
- git clone https://github.com/zbigniew-gajewski/asp-net-core-mvc-ef-core-angular.git<br/>
- cd asp-net-core-mvc-ef-core-angular<br/>
- cd bau<br/>
- build<br/>
- dotnet run<br/>

**Then:**<br/>
- open browser with http://localhost:8888<br/>
- login<br/>
- 'Go to Engineer List'<br/>

## In order to check web sockets: ##
- open another browser<br/>
- repeat above steps<br/>
- navigate to the same month (which is empty) on both browsers<br/>
- click 'Generate Plan...' button<br/>
<br/>
As a result, both browsers should refresh the plan.

