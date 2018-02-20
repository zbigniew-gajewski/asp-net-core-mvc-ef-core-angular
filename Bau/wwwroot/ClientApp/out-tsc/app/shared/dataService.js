"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.engineers = [];
        this.planItems = [];
        var now = new Date(Date.now());
        this.currentYear = now.getFullYear();
        this.currentMonth = now.getMonth() + 1;
    }
    Object.defineProperty(DataService.prototype, "currentMonthString", {
        get: function () {
            var monthString = this.currentMonth.toString();
            while (monthString.length < 2) {
                monthString = "0" + monthString;
            }
            return monthString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "isLoginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.loadEngineers = function () {
        var _this = this;
        return this.http.get("/api/engineers", { headers: new http_1.Headers({ "Authorization": "Bearer " + this.token }) })
            .map(function (result) {
            _this.engineers = result.json();
            return _this.engineers;
        });
    };
    DataService.prototype.generatePlan = function () {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + this.token);
        headers.append("yearString", this.currentYear.toString());
        headers.append("monthString", this.currentMonth.toString());
        return this.http.get("/api/planning/generate", { headers: headers });
    };
    DataService.prototype.getPlanItems = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + this.token);
        headers.append("yearString", this.currentYear.toString());
        headers.append("monthString", this.currentMonth.toString());
        return this.http.get("/api/planning", { headers: headers })
            .map(function (result) {
            _this.planItems = result.json();
            console.log(_this.planItems);
            return _this.planItems;
        });
    };
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .map(function (response) {
            var tokenInfo = response.json();
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        });
    };
    DataService.prototype.logout = function () {
        var _this = this;
        return this.http.get("/account/logout")
            .map(function (response) {
            _this.token = "";
            _this.tokenExpiration = new Date();
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map