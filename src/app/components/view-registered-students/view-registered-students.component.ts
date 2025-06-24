import { Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AdminService } from '../admin-home/AdminService.service';
import { Router } from '@angular/router';
import { Student } from '../student-home/Student.model';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../../Transaction.mode';

@Component({
  selector: 'app-view-registered-students',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './view-registered-students.component.html',
  styleUrl: './view-registered-students.component.css'
})
export class ViewRegisteredStudentsComponent {
  private adminService  = inject(AdminService);
  private students: Student[] = []
  private router = inject(Router);
  private selectedStudentName!:string;
  enteredPaymentDate = '';
  enteredAmount = ''
  private isCaptureResults = false;
  private isCapturePayment = false;
  private isActions = false;
  
  date = '';
  term = ' ';
  @ViewChild('parent') parentRef !: ElementRef;
  
  private actions = [
    {id: "01",
      name: "profile",
    },
    
    {id: "02",
      name: "results",
    },

    {id: "03",
      name: "payment",
    },

  ]

  get registeredStudents() {
    if(this.adminService.getSelectedStudentsToBeViewed === 'registered-student') {
    return this.adminService.getRegistereStudents;
    } else if(this.adminService.getSelectedStudentsToBeViewed === 'males') {
      return this.adminService.getMales;

    } else if (this.adminService.getSelectedStudentsToBeViewed === 'females') {
      return this.adminService.getFemales;

    } else if (this.adminService.getSelectedStudentsToBeViewed === 'grade-12') {
      return this.adminService.getGradeTwelves;

    } else if (this.adminService.getSelectedStudentsToBeViewed === 'grade-11') {
      return this.adminService.getGradeElevens;

    } else {
      return this.adminService.getGradeTens;
    }
  }


  get getActions() {
    return this.actions;
  }

  onClick(student : Student, action:string) {
    
     console.log(student.name === this.selectedStudentName)
  
    this.adminService.captureStudentProfile(student);
    if(action === "profile" ) {
      this.router.navigate(["student-profile"])
    } 
    else if (action === "results") {
      if(this.isCapturePayment === true) {
        this.isCapturePayment = false
      }
        this.isCaptureResults = true;
    } else {
      if(this.isCaptureResults == true) {
        this.isCaptureResults = false;
      }
      this.isCapturePayment =true;
    }
    
  }

  actionsClicked(name:string) {
    this.selectedStudentName = name;

    if(this.isCapturePayment === true) {
      this.isCapturePayment = false
    }

    if(this.isCaptureResults === true) {
      this.isCaptureResults = false
    }

    if(this.isActions === false){
      this.isActions =true
    } else {
      this.isActions =false
    }    
  }

  onSubmit(student:Student) {
    // for(let i =0;i < student.subjects!.length;i++){
    //    console.log( student.subjects![i].subjectName+" " + student.subjects![i].results?.marks)
    // }
    // console.log(this.term)
    //  console.log(this.date)
    if(this.parentRef){
      const parentElement:HTMLElement = this.parentRef.nativeElement
    const childrenCount = parentElement.childElementCount
    const childrenElements = parentElement.children
    for(let i =0;i < childrenElements.length;i++){
      const child = childrenElements[i]
      const c = child.children

      for(let i =0;i < c.length;i++){
        if(c[i].tagName.toLowerCase() === 'input'){
           const input = (c[i] as HTMLInputElement)
           console.log(input.name+ " input "+  input.value)
           for(let i =0;i < student.subjects!.length;i++){
                if(student.subjects![i].subjectName === input.name){
                    student.subjects![i].results = [{
                       id : 0,
                      term : parseInt(this.term),
                      year: this.date,
                      marks : parseInt(input.value)
                    }]
                }
            }

        }
       
        
      }
    }
    console.log("children -> " +childrenCount)
     console.log( student.subjects![0].subjectName  + " ->" +  student.subjects![0].results![0].marks)
    this.adminService.captureStudentMarks(student)
    }else{
      console.log("still unavailable")
    }

  }

  onSubmitPayment(student : Student){
    console.log(this.enteredPaymentDate)
    console.log(this.enteredAmount)
    const transaction = {
       id : 0,
      date : this.enteredPaymentDate,
      amount :parseInt(this.enteredAmount)
    };

    const transactions = [{ id : 0,
      date : this.enteredPaymentDate,
      amount :parseInt(this.enteredAmount)}]
    
      student.transactions = transactions;
    this.adminService.captureStudentPayment(student)

  }


  get getIsActions(){
    return this.isActions;
  }

  get getSelectedStudentName() {
    return this.selectedStudentName;
  }

   get getIsCaptureResults() {
    return this.isCaptureResults;
  }

  get getIsCapturePayment() {
    return this.isCapturePayment;
  }
}


