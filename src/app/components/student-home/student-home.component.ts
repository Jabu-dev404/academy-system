import { Component, inject } from '@angular/core';
import { StudentService } from './StudentService.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent {
  private router = inject(Router)
service = inject(StudentService);

get getRole(){
  return this.service.getRole
}

get menu() {
 return this.service.options
}

onClick(path:string) {
  this.router.navigate([path]);
}
}
