import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "./components/student-home/Student.model";


@Injectable({providedIn : 'root'})
export class AppService{
   private router = inject(Router)
   private httpClient = inject(HttpClient);
   student!:Student;

    login(username:string, password:string){
        this.httpClient.post<Student>("/api/auth/login",{
    "username": username,
    "password": password
},{withCredentials : true}).subscribe({next : (res)=>{
   console.log(res.user!.role!.role);
   this.student = res
    
   if(res.user!.role!.role==="ROLE_STUDENT"){
      this.router.navigate(["/student-home"])
   } else {
      this.router.navigate(["/admin-home"])
   }
}, error: (error) => {
   console.log(error.error)
}
})  
    }
}