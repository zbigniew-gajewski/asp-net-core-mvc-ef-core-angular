import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/dataService';
import { Router } from '@angular/router';
import { SocketService } from './shared/socketService';

@Component({
    selector: 'the-app',
    templateUrl: "./app.component.html",
    styles: []
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private data: DataService,
        private socketService : SocketService) {

        socketService.init();

        //router.events.subscribe((val) => {
        //    if (this.data.isLoginRequired) {
        //        return false;
        //    }
        //    else {
        //        return true;
        //    }
        //});
    }

    ngOnInit() {    
    }    
}
