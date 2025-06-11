import { inject, Injectable } from "@angular/core";
import { Student } from "../student-home/Student.model";
import { HttpClient } from "@angular/common/http";
import { AppService } from "../../appService.service";
import { Subject } from "rxjs";

@Injectable({providedIn:"root"})

export class AdminService {
    private http = inject(HttpClient)
    private appService = inject(AppService);
    private applications = 0;
    private student:Student = this.appService.student;
    selectedStudent! : Student 
   
    private students! : Student[]
    private homeMenuOptions = [
        {
            id:"01",
            name:"Register a student",
            path: "/admin-home/registration-form"
        },
        {
            id:"02",
            name:"Applications",
            path: "/admin-home/applications"
           
        }
    ]

        captureStudent(student : Student){
            student.user =  this.student.user;
            
            console.log(student.dOB)
            console.log(student.name)
            console.log(student.surname)
            console.log(student.gender)
            console.log(student.guardianCellphoneNo)
            console.log(student.postalCode)
            console.log(student.streetName)
            console.log(student.emailAddress)
            console.log(student.user?.password)
            this.http.post("/api/capture-student",student,{withCredentials : true}).subscribe();

        }

        getApplications(){
            this.http.post<Student[]>("/api/viewApplications",this.student).subscribe({
                next : (students)=>{
                    this.applications = students.length;
                   
                    this.students = students;
                }
            });
        }

        processApplication(student:Student) {
            
            this.http.post("/api/processApplication",student).subscribe()
        }

        viewStudent(student : Student){
            this.selectedStudent = student;
            console.log(this.selectedStudent)
        }
        
        get getHomeMenuOptions() {
            return this.homeMenuOptions;
        }

        get viewApplications() {
            return this.students;
        }

       get getSelectedStudent(){
        return this.selectedStudent
       }

       

        
}