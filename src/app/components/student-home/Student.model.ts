import { MySubject } from "../../Subject.model";
import { Transaction } from "../../Transaction.mode";
import { User } from "../../User.model";

export interface Student {
    id:number;
    name:string;
    surname:string;
    gender:string;
    dOB:string;
    grade : number;
     emailAddress :string;
     studentNo:string;
     idNo:string;
     streetName:string;
     houseNumber:string;
     postalCode:string;
     studentCellphoneNo:string;
     status:string;
     guardianName:string;
     guardianSurname:string;
     guardianCellphoneNo:string;
    user?:User;
    subjects?:MySubject[];
    transactions? : Transaction[];
}