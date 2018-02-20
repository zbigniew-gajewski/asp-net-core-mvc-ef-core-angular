import { Component } from "@angular/core"
import { DataService } from "../shared/dataService";

@Component({
    selector: "the-app",
    templateUrl: "home.component.html"
})

export class Home {
    title = "Business as Usual for Engineers";

    constructor(
        private data: DataService) {
    }
}