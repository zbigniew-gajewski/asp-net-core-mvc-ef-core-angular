import { Component } from "@angular/core"
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";

@Component({
    selector: "logout",
    templateUrl: "logout.component.html"
})
export class Logout {

    errorMessage: string = "";

    constructor(
        private data: DataService,
        private router: Router) {

        this.data.logout()
            .subscribe(
            success => {
                this.router.navigate(["/home"]);
            }, error => this.errorMessage = "Failed to logout");
    }
}