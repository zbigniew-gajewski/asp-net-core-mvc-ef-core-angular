import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Engineer } from './engineer';
import { PlanItem } from './planItem';
import { LiteEvent } from './liteEvent';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private readonly onLogin = new LiteEvent<string>();
    private readonly onLogout = new LiteEvent<void>();

    private token: string = "";
    private tokenExpiration: Date;

    constructor(
        private http: Http) {

        var now = new Date(Date.now());
        this.currentYear = now.getFullYear();
        this.currentMonth = now.getMonth() + 1;
    }

    public engineers: Engineer[] = [];
    public currentYear: number;
    public currentMonth: number;
    public planItems: PlanItem[] = [];

    public get OnLoggedIn() { return this.onLogin.expose(); }
    public get OnLoggedOut() { return this.onLogout.expose(); }

    public get currentMonthString(): string {
        var monthString = this.currentMonth.toString();
        while (monthString.length < 2) {
            monthString = "0" + monthString;
        }
        return monthString;
    }

    public get isLoginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public loadEngineers(): Observable<Engineer[]> {
        return this.http.get("/api/engineers", { headers: new Headers({ "Authorization": "Bearer " + this.token }) })
            .map((result: Response): Engineer[] => {
                this.engineers = result.json();
                return this.engineers;
            });
    }

    public generatePlan(): any {

        let headers = this.getHeadersWithCurrentYearAndMonth();
        return this.http.get("/api/planning/generate", { headers: headers });
    }

    public notifyAllClientsToRefreshPlanItems(): any {

        let headers = this.getHeaders();
        return this.http.get("/api/clientnotificationcommand/notifyallclientstorefreshplanitems", { headers: headers });
    }

    public refreshPlanItemsCommand() {
        this.getPlanItems()
            .subscribe(success => {
            }, error => {
                console.log(error);
            });
    }

    public getPlanItems(): any {

        let headers = this.getHeadersWithCurrentYearAndMonth();

        return this.http.get("/api/planning", { headers: headers })
            .map((result: Response): PlanItem[] => {
                this.planItems = result.json();
                return this.planItems;
            });
    }

    public login(creds) {
        return this.http.post("/account/createtoken", creds)
            .map(response => {
                let tokenInfo = response.json();
                this.token = tokenInfo.token;
                this.tokenExpiration = tokenInfo.expiration;
                this.onLogin.trigger(creds.username);
                return true;
            });
    }

    public logout() {
        return this.http.get("/account/logout")
            .map(response => {
                this.token = "";
                this.tokenExpiration = new Date();
                this.onLogout.trigger();
            });
    }

    private getHeadersWithCurrentYearAndMonth(): Headers {
        let headers = this.getHeaders();
        headers.append("yearString", this.currentYear.toString());
        headers.append("monthString", this.currentMonth.toString());
        return headers;
    }

    private getHeaders(): Headers {
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + this.token);
        return headers;
    }
}