"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var engineer_1 = require("./engineer");
var PlanItem = /** @class */ (function () {
    function PlanItem() {
        this.morningEngineer = new engineer_1.Engineer();
        this.afternoonEngineer = new engineer_1.Engineer();
    }
    return PlanItem;
}());
exports.PlanItem = PlanItem;
//# sourceMappingURL=planItem.js.map