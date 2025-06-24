import { inject, Injectable } from "@angular/core";
import { Student } from "../student-home/Student.model";
import { HttpClient } from "@angular/common/http";
import { AppService } from "../../appService.service";
import { MySubject } from "../../Subject.model";
import { BehaviorSubject, Subject } from "rxjs";
import { TimeTable } from "../../Time-table.model";

@Injectable({providedIn:"root"})

export class AdminService {
    private http = inject(HttpClient)
    private appService = inject(AppService);
    private numberOfAplications  = 0;
    private student:Student = this.appService.getStudent;
    private selectedStudent! : Student; 
    private students! : Student[];
    private offeredSubjects! : MySubject[];
    private applications : Student[] = [];
    private registerdStudent : Student[] = [];
    private males: Student[] =[];
    private females: Student[] = [];
    private gradeTwelves: Student[] = [];
    private gradeElevens: Student[] = [];
    private gradeTens: Student[] = [];
    private studentProfile! : Student;
    private selectedStudentsToBeViewed='';
    private lessonSubjectName = '';
    private lessonGrade = 0;
captureLesson = new BehaviorSubject<{subjectName : string;grade:number}>({subjectName:'',grade:0});



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
        },
        {
            id:"03",
            name:"Add subject",
            path: "/admin-home/add-subject"
        },

        {
            id:"04",
            name:"lesson",
            path: "capture-lesson1"
        }
     ]
     private subjects = [
        {
            id : "01",
            name : "Mathematics",
        },

        {
            id : "02",
            name : "Physical scince",
        },

        {
            id : "03",
            name : "Life Science",
        },

        {
            id : "04",
            name: "Geography"
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

        captureSubject(subject:MySubject) {
            subject.students =[];
            subject.students.push(this.student);
            this.http.post("/api/captureSubject",subject).subscribe()

        }

        captureTimetable(timeTable:TimeTable) {
           timeTable.student =this.student;
           console.log(timeTable.date);
           console.log(timeTable.time);
           console.log(timeTable.student.user?.username)
           this.http.post("/api/captureTimetable",timeTable).subscribe();
        }

        getApplications(){
            this.http.post<Student[]>("/api/viewApplications",this.student).subscribe({
                next : (students)=>{
                    this.registerdStudent = [];
                    this.males = [];
                    this.females = [];
                    this.gradeTwelves = [];
                    this.gradeElevens = [];
                    this.gradeTens = []
                     this.students = students;
                     
                
                for(let i =0;i < this.students.length;i++){
                     if(this.students[i].status === "PENDING"){
                        
                    this.applications.push(this.students[i]);
                    }
                    if(this.students[i].status === "ACCEPTED") {
                    
                        this.registerdStudent.push(this.students[i])

                        if(this.students[i].gender === "MALE") {
                            
                        this.males.push(this.students[i]);
                        }

                       if(this.students[i].gender === "FEMALE") {
                        
                        this.females.push(this.students[i]);
                       }

                       if(this.students[i].grade === 12) {

                        this.gradeTwelves.push(this.students[i]);
                       }
                       
                       if(this.students[i].grade === 11) {
                        this.gradeElevens.push(this.students[i]);
                       }

                       if(this.students[i].grade === 10) {
                        this.gradeTens.push(this.students[i]);
                       }

                    }

                    
                    
                }

                    this.numberOfAplications = this.applications.length;
                   
                   
                }
            });
        }

        captureStudentProfile(student : Student){
            this.studentProfile = student
        }

        captureStudentPayment(student: Student){
            console.log(student.user?.password + " user " + student.user?.username)
            console.log(student.transactions![0].amount  + " " + student.transactions![0].date )
            this.http.post("/api/capturePayment", student).subscribe();
        }

        captureStudentMarks(student :Student){
            this.students.push(student)
            console.log("im service")
            for(let i = 0; i < student.subjects!.length;i++){
                for(let j = 0; j < student.subjects![i].results!.length; j++){
                    console.log(student.subjects![i].subjectName + " " + student.subjects![i].results![j].marks 
                        +" " + student.subjects![i].results![j].term + " " + student.subjects![i].results![j].year
                    )
                }
            }

            this.http.post("/api/captureResults",student).subscribe()
        }


        getSubjects() {
            this.http.post<MySubject[]>("/api/viewSubjects",this.student).subscribe({
                next:(subjects) => {
                    this.offeredSubjects = subjects
                    for(let i = 0;i < this.offeredSubjects.length;i++){
                        for(let j = 0;j < this.offeredSubjects[i].results!.length;j++){
                            console.log(this.offeredSubjects[i].results![j].student?.surname)
                             console.log("we are here " +this.offeredSubjects[i].results![j].student!.user!.username)
                             console.log("we are here " +this.offeredSubjects[i].results![j].student!.user!.password)
                        }
                    }
                     console.log(this.offeredSubjects.length)
                }
            })
        }

        processApplication(student:Student) {  
            this.http.post("/api/processApplication",student).subscribe()
        }

        
        viewStudent(student : Student){
            this.selectedStudent = student;
            console.log(this.selectedStudent)
        }

         setSelectedStudentsToBeViewed(name : string) {
        this.selectedStudentsToBeViewed = name;
       }

       setLessonSubjectAndGrade(subjectname:string, grade: number) {
        this.lessonSubjectName = subjectname;
        this.lessonGrade = grade;

        this.captureLesson.next({subjectName : subjectname,grade : grade})
       }

       saveLesson(subject : MySubject){
            this.http.post("/api/captureLesson",subject).subscribe()
       }


        
        get getHomeMenuOptions() {
            return this.homeMenuOptions;
        }

        get viewApplications() {
            
            
            return this.applications;
        }

       get getSelectedStudent(){
        return this.selectedStudent
       }

       get getNumberOfAplicatins(){
        return this.numberOfAplications
       }

       get academySubjects() {
        return this.subjects
       }

       get getRegistereStudents() {
        return this.registerdStudent
       }

       get getMales() {
        return this.males
       }

       get getFemales() {
        return this.females
       }

       get getGradeTwelves() {
        return this.gradeTwelves
       }

       get getGradeElevens() {
        return this.gradeElevens
       }

       get getGradeTens() {
        return this.gradeTens
       }

       get getOfferedSubjects() {
        return this.offeredSubjects
       }


       get getStudentProfile(){
        return this.studentProfile
       }

       get getSelectedStudentsToBeViewed(){
        return this.selectedStudentsToBeViewed;
       }

       get getLessonSubjectName() {
        return this.lessonSubjectName
       }

       get getLessonGrade() {
        return this.lessonGrade;
       }

      
}