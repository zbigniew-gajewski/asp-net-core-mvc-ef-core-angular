import { Component } from '@angular/core';
import { DataService } from './shared/dataService';
import { Router } from '@angular/router';

@Component({
  selector: 'the-app',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {

    constructor(
        private router: Router,
        private data: DataService) {

        //router.events.subscribe((val) => {
        //    if (this.data.isLoginRequired) {
        //        return false;
        //    }
        //    else {
        //        return true;
        //    }
        //});
    }
}
