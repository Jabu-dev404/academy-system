import { Component, inject } from '@angular/core';
import { AdminService } from '../admin-home/AdminService.service';
import { Student } from '../student-home/Student.model';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-application-view',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './application-view.component.html',
  styleUrl: './application-view.component.css'
})
export class ApplicationViewComponent {
  service = inject(AdminService)
  router = inject(Router)
  

  get applications() {
    return this.service.viewApplications
  }

  onClick(student:Student) {
    console.log(student)
   this.service.viewStudent(student)

    this.router.navigate(["admin-home/applications/applicant-details"])
  }
}
