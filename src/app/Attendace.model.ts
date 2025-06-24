import { Student } from "./components/student-home/Student.model";

export interface Attendance {
     id : number ;
    
    present : boolean;

    student? : Student;
}