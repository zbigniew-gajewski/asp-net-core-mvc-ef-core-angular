webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/account/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">    \r\n\r\n    <div class=\"row\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-4 col-md-offset-4 well\">\r\n                <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n                <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                        <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                        <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"form-group\">\r\n                        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/account/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "bau@bau.bau",
            password: "P@ssw0rd!"
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.errorMessage = "";
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (error) {
            _this.errorMessage = "Failed to login";
        });
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "login",
            template: __webpack_require__("../../../../../ClientApp/app/account/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/account/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div></div>\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/account/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Logout = /** @class */ (function () {
    function Logout(data, router) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.data.logout()
            .subscribe(function (success) {
            _this.router.navigate(["/home"]);
        }, function (error) { return _this.errorMessage = "Failed to logout"; });
    }
    Logout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "logout",
            template: __webpack_require__("../../../../../ClientApp/app/account/logout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], Logout);
    return Logout;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"navbar navbar-default\">\r\n                <header>\r\n                    <div class=\"navbar-header\">\r\n                        <div class=\"navbar-brand\"><a href=\"\" style=\"margin-right: 10px;\"><i class=\"fa fa-suitcase\"></i></a>BAU</div>\r\n                        <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">&#9776;</button>\r\n                    </div>\r\n                    <div id=\"menu\" class=\"collapse navbar-collapse\">\r\n                        <ul class=\"nav navbar-nav\">\r\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\r\n                            <li><a routerLink=\"/engineers\" routerLinkActive=\"active\">Engineers</a></li>\r\n                            <li *ngIf=\"data.isLoginRequired\"><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\r\n                            <li *ngIf=\"data.isLoginRequired == false\"><a routerLink=\"/logout\" routerLinkActive=\"active\">Logout</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </header>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, data) {
        this.router = router;
        this.data = data;
        //router.events.subscribe((val) => {
        //    if (this.data.isLoginRequired) {
        //        return false;
        //    }
        //    else {
        //        return true;
        //    }
        //});
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'the-app',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__engineers_home_component__ = __webpack_require__("../../../../../ClientApp/app/engineers/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__engineers_engineers_component__ = __webpack_require__("../../../../../ClientApp/app/engineers/engineers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_login_component__ = __webpack_require__("../../../../../ClientApp/app/account/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_logout_component__ = __webpack_require__("../../../../../ClientApp/app/account/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__engineers_home_component__["a" /* Home */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_8__account_login_component__["a" /* Login */] },
    { path: "logout", component: __WEBPACK_IMPORTED_MODULE_9__account_logout_component__["a" /* Logout */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_6__engineers_home_component__["a" /* Home */] },
    { path: "engineers", component: __WEBPACK_IMPORTED_MODULE_7__engineers_engineers_component__["a" /* Engineers */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__engineers_home_component__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_7__engineers_engineers_component__["a" /* Engineers */],
                __WEBPACK_IMPORTED_MODULE_8__account_login_component__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_9__account_logout_component__["a" /* Logout */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: true // for Debugging of the Routes
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_dataService__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/engineers/engineers.component.html":
/***/ (function(module, exports) {

module.exports = "<!--https://codepen.io/rubenh/pen/OVmGMP-->\r\n<div class=\"container\" style=\"height: 100%\">\r\n\r\n    <div class=\"row\" style=\"margin-bottom: 30px;\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-12\">\r\n                <h2>{{title}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"height:100%;\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <div class=\"col-md-3\" *ngIf=\"data.isLoginRequired == false\">\r\n                <div *ngFor=\"let e of this.data.engineers\">\r\n                    <button class=\"btn btn-link\" style=\"height:25px; text-align:left;\" (click)=\"selectEngineer(e)\"><div>{{ e.firstName }} <strong>{{ e.lastName }}</strong> </div></button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8 col-md-offset-1\" *ngIf=\"data.isLoginRequired == false\">\r\n                <div style=\"margin-bottom: 10px; font-size: 24px; color: green\"><strong>{{ selectedEngineer.firstName }} {{selectedEngineer.lastName}}</strong></div>\r\n\r\n                <table style=\"width:100%; margin-bottom: 5px;\">\r\n                    <tr>\r\n                        <th style=\"text-align: left; width: 40%;\">Date</th>\r\n                        <th style=\"text-align: left; width: 30%;\">Morning</th>\r\n                        <th style=\"text-align: left; width: 30%;\">Afternoon</th>\r\n                    </tr>\r\n                </table>\r\n\r\n                <div class=\"pre-scrollable\">\r\n                    <table style=\"border: solid; border-width: thin; border-radius: 3px; border-color: gray; padding: 5px; width:100%\">\r\n                        <tr *ngFor=\"let pi of data.planItems\">\r\n                            <td style=\"width: 40%\">\r\n                                <div style=\"background-color: darkgray; margin: 2px; padding: 3px;\"><strong> {{ pi.date }}</strong> </div>\r\n                            </td>\r\n                            <td style=\"width: 30%;\">\r\n                                <div *ngIf=\"pi.morningEngineer.id != 0 && pi.morningEngineer.id == selectedEngineer.id\" style=\"background-color: mintcream; color: green; margin: 2px; padding: 3px;\"><strong>{{ pi.morningEngineer.firstName }} {{ pi.morningEngineer.lastName }}</strong></div>\r\n                                <div *ngIf=\"pi.morningEngineer.id != 0 && pi.morningEngineer.id != selectedEngineer.id\" style=\"background-color: lightgray; margin: 2px; padding: 3px;\"><strong>{{ pi.morningEngineer.firstName }} {{ pi.morningEngineer.lastName }}</strong></div>\r\n                            </td>\r\n                            <td style=\"width: 30%\">\r\n                                <div *ngIf=\"pi.afternoonEngineer.id != 0 && pi.afternoonEngineer.id == selectedEngineer.id\" style=\"background-color: mintcream; color: green; margin: 2px; padding: 3px;\"><strong>{{ pi.afternoonEngineer.firstName }} {{ pi.afternoonEngineer.lastName }}</strong></div>\r\n                                <div *ngIf=\"pi.afternoonEngineer.id != 0 && pi.afternoonEngineer.id != selectedEngineer.id\" style=\"background-color: lightgray; margin: 2px; padding: 3px;\"><strong>{{ pi.afternoonEngineer.firstName }} {{ pi.afternoonEngineer.lastName }}</strong></div>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div style=\"width: 100%; display: flex; margin-top: 5px;\">\r\n                    <button class=\"btn btn-lg btn-primary\" style=\"width: 20%;  margin-left: 2px;\" (click)=\"loadPreviousMonth()\">\r\n                        <strong>&lt;</strong>\r\n                    </button>\r\n                    <button class=\"btn btn-lg btn-primary\" style=\"width: 80%; margin-left:3px; margin-right:3px; text-align: center; font-size: 22px;\" (click)=\"generatePlan()\"><strong>Generate plan for {{ data.currentYear }} - {{ data.currentMonthString }}</strong></button>\r\n                    <button class=\"btn btn-lg btn-primary\" style=\"width: 20%; margin-right: 2px;\" (click)=\"loadNextMonth()\">\r\n                        <strong>&gt;</strong>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"container\">\r\n        <div class=\"col-md-12\">\r\n            <login *ngIf=\"data.isLoginRequired\"></login>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/engineers/engineers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engineers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_engineer__ = __webpack_require__("../../../../../ClientApp/app/shared/engineer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Engineers = /** @class */ (function () {
    function Engineers(data) {
        this.data = data;
        this.title = "Engineer List";
        this.selectedEngineer = new __WEBPACK_IMPORTED_MODULE_2__shared_engineer__["a" /* Engineer */]();
    }
    Engineers.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadEngineers()
            .subscribe(function (success) {
            if (success) {
                _this.selectedEngineer = _this.data.engineers[0];
                _this.loadCurrentMonth();
            }
        });
    };
    Engineers.prototype.selectEngineer = function (engineer) {
        this.selectedEngineer = engineer;
    };
    Engineers.prototype.generatePlan = function () {
        var _this = this;
        this.data.generatePlan()
            .subscribe(function (success) {
            _this.loadCurrentMonth();
        }, function (error) {
            console.log(error);
        });
    };
    Engineers.prototype.loadCurrentMonth = function () {
        this.data.getPlanItems()
            .subscribe(function (success) {
        }, function (error) {
            console.log(error);
        });
    };
    Engineers.prototype.loadPreviousMonth = function () {
        this.data.currentMonth -= 1;
        if (this.data.currentMonth < 1) {
            this.data.currentMonth = 12;
            this.data.currentYear -= 1;
        }
        this.data.getPlanItems()
            .subscribe(function (success) {
        }, function (error) {
            console.log(error);
        });
    };
    Engineers.prototype.loadNextMonth = function () {
        this.data.currentMonth += 1;
        if (this.data.currentMonth > 12) {
            this.data.currentMonth = 1;
            this.data.currentYear += 1;
        }
        this.data.getPlanItems()
            .subscribe(function (success) {
        }, function (error) {
            console.log(error);
        });
    };
    Engineers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "engineer-list",
            template: __webpack_require__("../../../../../ClientApp/app/engineers/engineers.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], Engineers);
    return Engineers;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/engineers/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h2>{{title}}</h2>\r\n            <p>This application allow user to plan <strong>Business as Usual (BAU)</strong> work for engineers.</p>\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <br />\r\n    <login *ngIf=\"data.isLoginRequired\"></login>\r\n    <button *ngIf=\"data.isLoginRequired == false\" routerLink=\"engineers\" routerLinkActive=\"active\" class=\"btn btn-primary\">Go to Engineer List</button>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/engineers/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home = /** @class */ (function () {
    function Home(data) {
        this.data = data;
        this.title = "Business as Usual for Engineers";
    }
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "the-app",
            template: __webpack_require__("../../../../../ClientApp/app/engineers/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], Home);
    return Home;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        return this.http.get("/api/engineers", { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Authorization": "Bearer " + this.token }) })
            .map(function (result) {
            _this.engineers = result.json();
            return _this.engineers;
        });
    };
    DataService.prototype.generatePlan = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + this.token);
        headers.append("yearString", this.currentYear.toString());
        headers.append("monthString", this.currentMonth.toString());
        return this.http.get("/api/planning/generate", { headers: headers });
    };
    DataService.prototype.getPlanItems = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/shared/engineer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engineer; });
var Engineer = /** @class */ (function () {
    function Engineer() {
        this.firstName = "";
        this.lastName = "";
    }
    return Engineer;
}());



/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map