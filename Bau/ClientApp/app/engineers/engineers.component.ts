import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Engineer } from "../shared/engineer";


@Component({
    selector: "engineer-list",
    templateUrl: "engineers.component.html"
})
export class Engineers implements OnInit {

    title = "Engineer List";

    public selectedEngineer: Engineer = new Engineer();

    constructor(
        private data: DataService) {
    }

    ngOnInit(): void {

        this.data.loadEngineers()
            .subscribe(success => {
                if (success) {
                    this.selectedEngineer = this.data.engineers[0];
                    this.loadCurrentMonth();
                }
            });
    }

    public selectEngineer(engineer: Engineer): void {
        this.selectedEngineer = engineer;
    }

    public generatePlan(): void {
        this.data.generatePlan()
            .subscribe(success => {
                this.loadCurrentMonth();
            }, error => {
                console.log(error);
            });
    }

    public loadCurrentMonth() {

        this.data.getPlanItems()
            .subscribe(success => {
            }, error => {
                console.log(error);
            });
    }

    public loadPreviousMonth() {
        this.data.currentMonth -= 1;
        if (this.data.currentMonth < 1) {
            this.data.currentMonth = 12;
            this.data.currentYear -= 1;
        }

        this.data.getPlanItems()
            .subscribe(success => {
            }, error => {
                console.log(error);
            });

    }

    public loadNextMonth(): void {

        this.data.currentMonth += 1;
        if (this.data.currentMonth > 12) {
            this.data.currentMonth = 1;
            this.data.currentYear += 1;
        }

        this.data.getPlanItems()
            .subscribe(success => {
            }, error => {
                console.log(error);
            });
    }
}