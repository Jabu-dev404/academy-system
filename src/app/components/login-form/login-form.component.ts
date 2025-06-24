import { Component, inject } from '@angular/core';
import { AppService } from '../../appService.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
   username = '';
  password = '';
  response = "";
  loading = false;
  appService= inject(AppService);
  router = inject(Router)
 

   onSubmit(){
    this.loading=true
    this.appService.login(this.username, this.password);
    this.loading=false;
   }

   onClick() {
    this.router.navigate(['sign-up']);
   }
}
