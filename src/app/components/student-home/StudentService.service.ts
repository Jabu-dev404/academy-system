import { inject, Injectable } from "@angular/core";
import { AppService } from "../../appService.service";
import { Student } from "./Student.model";
import { User } from "../../User.model";
import { HttpClient } from "@angular/common/http";
import { MySubject } from "../../Subject.model";

@Injectable({
    providedIn:"root"
})
export class StudentService {
    private appService = inject(AppService);
       student =  this.appService.getStudent
     private offeredSubjects! : MySubject[];
    private http = inject(HttpClient);


    options = [
        {
            id : "01",
            name: "apply",
            path: '/student-home/application-form'
        },
        {
            id:"02",
            name: "application-status"
        },
        {
            id: "3",
            name: "track-progress"
        },
        {
            id: "04",
            name: "view-time-table"
        }
    ]
     
    get getRole() {
        return this.student.user!.role!.role;
    }

    get menu() {
        return this.options
    }

    signUp(user:User) {
    console.log(user.username)
    console.log(user.id)
    this.http.post("/api/auth/sign-up", user,{withCredentials : true}).subscribe()
    }

    apply(student:Student){
        student.id = this.student.id
        console.log(this.student.user?.password)
        console.log(this.student.user?.username)
        student.user = this.student.user;

        console.log(student.user?.password)
        console.log(student.user?.username)
        console.log(student.transactions![0].date)
        console.log(student.transactions![0].amount)
         console.log(student.subjects![0].results![0].marks)

        this.http.post("/api/apply",student,{withCredentials : true}).subscribe()
    }
 

     getSubjects() {
        console.log(this.student.user?.username + " " + this.student.user?.password)
                this.http.post<MySubject[]>("/api/viewSubjects",this.student).subscribe({
                    next:(subjects) => {
                        this.offeredSubjects = subjects
                         console.log(this.offeredSubjects.length)
                    }
                })
            }
            

    get getOfferedSubjects() {
        return this.offeredSubjects
       } 
       
    
}