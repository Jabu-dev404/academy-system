import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from './components/student-home/Student.model';
import { Router, RouterOutlet } from '@angular/router';
import { AppService } from './appService.service';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule,RouterOutlet],
})
export class AppComponent {
 
}
