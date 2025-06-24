import { Component, effect, inject, OnInit } from '@angular/core';
import { StudentService } from './StudentService.service';
import { Router, RouterOutlet } from '@angular/router';
import { Student } from './Student.model';
import { AppService } from '../../appService.service';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent {

  private router = inject(Router)
  private service = inject(StudentService);
  // private appService = inject(AppService)

 

ngOnInit(): void {
     this.service.getSubjects();
  }

// constructor() {
  // effect(() => {
    // if(this.student.user) {
      // console.log("hey")
      // this.service.getSubjects();
    // }
  // })
// }


get getRole(){
  return this.service.getRole
}

get menu() {
 return this.service.options
}

get getStudent() {
 return this.service.student
}

onClick(path:string) {
  this.router.navigate([path]);
}
}
