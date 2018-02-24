import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Home } from './engineers/home.component';
import { Engineers } from './engineers/engineers.component';
import { Login } from './account/login.component';
import { Logout } from './account/logout.component';
import { DataService } from './shared/dataService';
import { SocketService } from './shared/socketService';


let routes = [
    { path: "", component: Home },
    { path: "login", component: Login },
    { path: "logout", component: Logout },
    { path: "home", component: Home },
    { path: "engineers", component: Engineers },
];

@NgModule({
    declarations: [
        AppComponent,
        Home,
        Engineers,
        Login,
        Logout
    ],

    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: true // for Debugging of the Routes
        }),
    ],

    providers: [
        DataService,
        SocketService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
