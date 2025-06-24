import { Student } from "./components/student-home/Student.model";
import { Lesson } from "./Lesson.model";
import { Result } from "./Result.model";
import { User } from "./User.model";

export interface MySubject {
    id:number;
    subjectName:string;
    results? : Result[],
    status? : boolean;
    students? : Student[];
    lessons? : Lesson[]
}