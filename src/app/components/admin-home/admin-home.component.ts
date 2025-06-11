import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from './AdminService.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{
  router = inject(Router)
  service = inject(AdminService);


  ngOnInit(): void {
    this.service.getApplications()
  }
  

  get getHomeMenuOptions() {
    return this.service.getHomeMenuOptions
  }

  onClick(option:string) {
    this.router.navigate([option])
  }

  get applications() {
    return this.service.viewApplications;
  } 

  

}
