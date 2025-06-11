import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentService } from '../student-home/StudentService.service';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent {
 private studentService = inject(StudentService)
  
  form = new FormGroup({
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
     
      
    })


    onSubmit() {
      this.studentService.apply(
        {
         "id":0,
        name:this.form.value.name!,
        surname:this.form.value.surname!,
        gender:this.form.value.gender!,
        dOB:this.form.value.date!,
        emailAddress : this.form.value.emailAddress!,
         studentNo: '',
         idNo:this.form.value.idNumber!,
         streetName:this.form.value.streetName!,
         houseNumber:this.form.value.houseNumber!,
         postalCode:this.form.value.postalCode!,
         status:"PENDING",
         studentCellphoneNo:this.form.value.gurdianCellphoneNo!,
         guardianName:this.form.value.gurdianName!,
         guardianSurname:this.form.value.surname!,
         guardianCellphoneNo:this.form.value.gurdianCellphoneNo!
      }
    )
    }

    onCancel() {

    }

}
