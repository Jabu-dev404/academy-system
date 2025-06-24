import { Student } from "./components/student-home/Student.model";

export interface TimeTable {
    id:number;
    grade: number;
    subjectName:string;
    date:string;
    time:string;
    student?:Student;
}