import { inject, Injectable } from "@angular/core";
import { AppService } from "../../appService.service";
import { Student } from "./Student.model";
import { User } from "../../User.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:"root"
})
export class StudentService {
    private appService = inject(AppService);
    private student:Student = this.appService.student;
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
         console.log(user.password)
    console.log(user.username)
    console.log(user.id)
    this.http.post("/api/auth/sign-up", user,{withCredentials : true}).subscribe()
    }

    apply(student:Student){
        // console.log(this.student.user?.password)
        // console.log(this.student.user?.username)
        student.user = this.student.user;
       



        this.http.post("/api/apply",student,{withCredentials : true}).subscribe()
    }
}