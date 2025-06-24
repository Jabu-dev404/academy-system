import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin-home/AdminService.service';
import { Router } from '@angular/router';
import { MySubject } from '../../Subject.model';
import { NgFor } from '@angular/common';
import { StudentService } from '../student-home/StudentService.service';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
 private Service = inject(AdminService);
 
   
  private isDropdownShown = false;
  private mySubjects:MySubject[] =this.Service.getOfferedSubjects;
  private choosenSubjects : MySubject[] =[]
   private  captureResults :MySubject[] = [];
   private currentDate = new Date();
  private fb = inject(FormBuilder)
  form! : FormGroup;
  @ViewChild('parent') parentRef !: ElementRef;
 
     ngOnInit(): void {
    this.form = this.fb.group({
       name:new FormControl(''),
       surname:new FormControl(''),
       gender:new FormControl(''),
       date:new FormControl(''),
       idNumber:new FormControl(''),
       cellPhoneNo:new FormControl(''),
       emailAddress : new FormControl(''),
       streetName:new FormControl(''),
       houseNumber:new FormControl(''),
       postalCode:new FormControl(''),
       gurdianName : new FormControl(''),
       gurdianSurname : new FormControl(''),
       gurdianCellphoneNo:new FormControl(''),
       grade : new FormControl(0),
       resultDate : new FormControl(''),
       term : new FormControl(0),
       payment : new FormControl(0),
       options : this.fb.array(this.subjects.map(s => new FormControl(s.status)))
     })
      
     this.form.get('options')?.valueChanges.subscribe(
       (values : boolean[]) =>{
         this.captureResults = []
           values.forEach(
               (s,i)=>{
                 this.mySubjects[i].status = s
                 if(this.mySubjects[i].status !== null){
                   if(this.mySubjects[i].status === true){
                     console.log(this.mySubjects[i].status + " " + this.mySubjects[i].subjectName)
                     this.captureResults.push(this.mySubjects[i]);
                     console.log(this.captureResults.length)
                   }else{
                     console.log(this.mySubjects[i].status + " " + this.mySubjects[i].subjectName)
                     this.captureResults = this.captureResults.filter(s=> s.status === true);
                     console.log(this.captureResults.length)
                  }
 
                 }
                 
               }
 
           )
       }
 
     )
     
   }
 
 
   get options() : FormArray{
       return this.form.get('options') as FormArray;
     }
 
 
     onSubmit() {
 
     const parentElement:HTMLElement = this.parentRef.nativeElement
     const childrenCount = parentElement.childElementCount
     const childrenElements = parentElement.children
     console.log("children " + childrenCount + " term " + this.form.value.term + " " + this.form.value.resultDate )
     for(let i =0;i < childrenElements.length;i++){
       const child = childrenElements[i]
       const c = child.children
 
       for(let i =0;i < c.length;i++){
         if(c[i].tagName.toLowerCase() === 'input'){
            const input = (c[i] as HTMLInputElement)
            console.log(input.name+ " input "+  input.value)
 
            for(let i = 0;i < this.mySubjects.length;i++){
             if(this.mySubjects[i].status === true){
               console.log(this.mySubjects[i].subjectName + " " + this.mySubjects[i].status)
               if(this.mySubjects[i].subjectName === input.name){
                   this.mySubjects[i].results =  [{
                        id : 0,
                       term : parseInt(this.form.value.term),
                       year: this.form.value.resultDate,
                       marks : parseInt(input.value)
                     }]
                      this.choosenSubjects.push(this.mySubjects[i])
               }
 
              
             }
       
     }
            for(let i =0;i < this.choosenSubjects.length;i++){
           //     for(let j =0;j <this.choosenSubjects[i].results!.length;j++){
                  console.log(this.choosenSubjects[i].subjectName +"  done  " + this.choosenSubjects[i].results![0].marks)
           //     }
                
             }
 
         }
        
         
       }
     }
 
    this.Service.captureStudent({
       "id":0,
         name:this.form.value.name!,
         surname:this.form.value.surname!,
         gender:this.form.value.gender!,
         grade : parseInt (this.form.value.grade!),
         dOB:this.form.value.date!,
         emailAddress : this.form.value.emailAddress!,
         studentNo: ''!,
         idNo:this.form.value.idNumber!,
         streetName:this.form.value.streetName!,
         houseNumber:this.form.value.houseNumber!,
         postalCode:this.form.value.postalCode!,
         status:"PENDING",
         studentCellphoneNo:this.form.value.cellPhoneNo!,
         guardianName:this.form.value.gurdianName!,
         guardianSurname:this.form.value.gurdianSurname!,
         guardianCellphoneNo:this.form.value.gurdianCellphoneNo!,
         subjects : this.choosenSubjects,
         transactions : [{
            id : 0,
           date : "2020-01-16",
           amount : this.form.value.payment
         }]
     })
      this.choosenSubjects = []
 
     }
 
     onCancel() {
 
     }
 
 
 
     dropDown() {
     if(this.isDropdownShown) {
        this.isDropdownShown = false
     } else {
        this.isDropdownShown = true
     }
    
   }
 
   get isDropDown() {
     return this.isDropdownShown
   }
 
   get subjects(){
     return this.mySubjects
   }
 
   get getChoosenSubjects() {
     return this.captureResults;
   }
 
}