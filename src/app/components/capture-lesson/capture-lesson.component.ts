import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../admin-home/AdminService.service';
import { Student } from '../student-home/Student.model';
import { Subscription } from 'rxjs';
import { Lesson } from '../../Lesson.model';
import { Attendance } from '../../Attendace.model';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MySubject } from '../../Subject.model';

@Component({
  selector: 'app-capture-lesson',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './capture-lesson.component.html',
  styleUrl: './capture-lesson.component.css'
})
export class CaptureLessonComponent implements OnInit,OnDestroy {
  
  private service = inject(AdminService);
  private lessonSubjectName = this.service.getLessonSubjectName;
  private lessonGrade = this.service.getLessonGrade;
  private lessonStudents :Student[] =[];
  private lesson! :Lesson;
  private subscription! :Subscription;
  private attendance : Attendance[] = [];
  private subject! :MySubject;
  private fb = inject(FormBuilder);
    form! : FormGroup;

  ngOnInit(): void {

   this.subscription = this.service.captureLesson.subscribe({next :(data)=>{
      const grade = this.lessonGrade
     for(let i = 0; i < this.service.getOfferedSubjects.length; i++) {
      if(this.service.getOfferedSubjects[i].subjectName === data.subjectName) {
            this.subject = this.service.getOfferedSubjects[i];
           for(let j = 0;j < this.service.getOfferedSubjects[i].results!.length;j++){


              console.log(this.service.getOfferedSubjects[i].results![j].student?.grade + " " + this.lessonGrade)
              if(this.service.getOfferedSubjects[i].results![j].student?.grade  ==  data.grade) {
                this.lessonStudents.push(this.service.getOfferedSubjects[i].results![j].student!);
                this.attendance.push({ id : 0 ,
                                      present : false,
                                      student :this.service.getOfferedSubjects[i].results![j].student! })
              }
            }
      }
    }
    }})
    

      console.log(this.attendance.length);
      
      this.form = this.fb.group({
             topic : new FormControl(''),
             subTopic : new FormControl(''),
             options : this.fb.array(this.attendance.map(s => new FormControl(s.present)))
           })




           this.form.get('options')?.valueChanges.subscribe(
       (values : boolean[]) =>{
           values.forEach(
               (s,i)=>{
                 this.attendance[i].present = s
                 
               }
 
           )
       }
 
     )




  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }



  onSubmit(){
    console.log(this.form.value.topic!)
     console.log(this.form.value.subTopic!)
      for(let i = 0;i < this.attendance.length;i++){
        console.log(this.attendance[i].student!.name + "  " + this.attendance[i].present + " " + this.attendance[i].student!.user!.username)
        console.log(this.attendance[i].student!.name + "  " + this.attendance[i].present + " " + this.attendance[i].student!.user!.password)
      }

    
      this.subject.lessons = [{
        lessonId : 0,

    
        date : '2025-11-02',

    
        grade : this.getLessonGrade,

    
      topic : this.form.value.topic!,

    
      subTopic : this.form.value.subTopic!,

       attendances: this.attendance,
      }]

      this.service.saveLesson(this.subject)
  }

  

   

  get getLessonStudents() {
    return this.attendance
  }

  get getLessonSubjectName() {
    return this.lessonSubjectName
  }

  get getLessonGrade() {
    return this.lessonGrade
  }

  get getAttendences(){
    return this.attendance
  }
   get options() : FormArray{
         return this.form.get('options') as FormArray;
       }
   
}
