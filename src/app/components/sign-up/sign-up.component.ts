import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student-home/StudentService.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private router = inject(Router);
  private service = inject(StudentService)
  form = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  })


  onClick() {
    this.router.navigate(['../'])
  }
  
  onSubmit(){

    this.service.signUp({
      id:0,
    username:this.form.value.username!,
    password:this.form.value.confirmPassword!,
    active:true,
    })
   this.router.navigate(['../'])
  }
}
