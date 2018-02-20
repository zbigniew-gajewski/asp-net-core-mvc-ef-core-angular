import { Engineer } from "./engineer";

export class PlanItem {
    date: string;
    morningEngineer: Engineer = new Engineer();    
    afternoonEngineer: Engineer = new Engineer();    
}

