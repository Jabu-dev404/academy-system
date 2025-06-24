import { Student } from "./components/student-home/Student.model";

export interface Result {
     id : number;
    term : number;
     year: string;
    marks : number;
    student? : Student
}