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
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var engineer_1 = require("../shared/engineer");
var Engineers = /** @class */ (function () {
    function Engineers(data) {
        this.data = data;
        this.title = "Engineer List";
        this.selectedEngineer = new engineer_1.Engineer();
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
        core_1.Component({
            selector: "engineer-list",
            templateUrl: "engineers.component.html"
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], Engineers);
    return Engineers;
}());
exports.Engineers = Engineers;
//# sourceMappingURL=engineers.component.js.map