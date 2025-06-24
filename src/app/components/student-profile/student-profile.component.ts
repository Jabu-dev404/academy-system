import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../admin-home/AdminService.service';
import { Student } from '../student-home/Student.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
 private service = inject(AdminService);
 

  get getStudent(){
    return this.service.getStudentProfile
  }

}
