import { Attendance } from "./Attendace.model";
import { MySubject } from "./Subject.model";

export interface Lesson {
 lessonId : number;

    
    date : string;

    
    grade : number;

    
    topic : string;

    
  subTopic : string;

  subject? : MySubject;

attendances? :Attendance[];

}