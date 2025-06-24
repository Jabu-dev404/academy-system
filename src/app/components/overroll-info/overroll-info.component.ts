import { Component, inject } from '@angular/core';
import { AdminService } from '../admin-home/AdminService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overroll-info',
  standalone: true,
  imports: [],
  templateUrl: './overroll-info.component.html',
  styleUrl: './overroll-info.component.css'
})
export class OverrollInfoComponent {
private service = inject(AdminService);
private router = inject(Router);
 


get numberOfRegisteredStudents() {
  return this.service.getRegistereStudents.length
}

get numberOfMales() {
  return this.service.getMales.length
}

get numberOfFemales() {
  return this.service.getFemales.length
}

get numberOfGradeTwelves() {
  return this.service.getGradeTwelves.length
}

get numberOfGradeElevens() {
  return this.service.getGradeElevens.length
}

get numberOfGradeTens() {
  return this.service.getGradeTens.length
}

onClick(name : string) {
   this.service.setSelectedStudentsToBeViewed(name);
  this.router.navigate(['registered-students'])
}
}
