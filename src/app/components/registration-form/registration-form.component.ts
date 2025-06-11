import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin-home/AdminService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  private router = inject(Router)
  private adminService = inject(AdminService);
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
    
    this.adminService.captureStudent({ "id":0,
        name:this.form.value.name!,
        surname:this.form.value.surname!,
        gender:this.form.value.gender!,
        dOB:this.form.value.date!,
        emailAddress : this.form.value.emailAddress!,
         studentNo: ''!,
         idNo:this.form.value.idNumber!,
         streetName:this.form.value.streetName!,
         houseNumber:this.form.value.houseNumber!,
         postalCode:this.form.value.postalCode!,
         status:"ACCEPTED",
         studentCellphoneNo:this.form.value.gurdianCellphoneNo!,
         guardianName:this.form.value.gurdianName!,
         guardianSurname:this.form.value.surname!,
         guardianCellphoneNo:this.form.value.gurdianCellphoneNo!})
  }


  onCancel() {
    this.router.navigate(["admin-home"])
  }

}
