import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../admin-home/AdminService.service';
import { Student } from '../../student-home/Student.model';

@Component({
  selector: 'app-applicant-detatils',
  standalone: true,
  imports: [],
  templateUrl: './applicant-detatils.component.html',
  styleUrl: './applicant-detatils.component.css'
})
export class ApplicantDetatilsComponent  {
  student! : Student 
  adminService = inject(AdminService);
  

  get selectedStudent(){
    return this.adminService.getSelectedStudent
  }
  
  accept() {

    this.student = this.adminService.getSelectedStudent;
    this.student.status = "ACCEPTED";

    this.adminService.processApplication(this.student)

  }

  decline() {
    
    this.student = this.adminService.getSelectedStudent;
    this.student.status = "DECLINED";

    this.adminService.processApplication(this.student)
  }

  cancel() {

  }
  
}
