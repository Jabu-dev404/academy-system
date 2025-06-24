import { Component, inject, input, OnInit } from '@angular/core';
import { AdminService } from './AdminService.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{
  private router = inject(Router)
  private service = inject(AdminService);
  private isCaptureLesson = false
  grade = 0;
  subject = '';


  ngOnInit(): void {
    this.service.getApplications();
    this.service.getSubjects();
  }
  

  get getHomeMenuOptions() {
    return this.service.getHomeMenuOptions
  }

  onClick(option:string) {
    if(option === "capture-lesson1") {
      this.isCaptureLesson = true
    }
    this.router.navigate([option])
  }

  get numberOfAplications(){
    return this.service.getNumberOfAplicatins
  }

  get subjects() {
    return this.service.getOfferedSubjects
  }

  lessonSubmit() {
    this.service.setLessonSubjectAndGrade(this.subject, this.grade);
    this.router.navigate(["capture-lesson"]);
  }
 
  get getIsCaptureLesson() {
    return this.isCaptureLesson;
  }
  

}
