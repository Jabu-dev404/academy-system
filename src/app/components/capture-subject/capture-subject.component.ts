import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { AdminService } from '../admin-home/AdminService.service';

@Component({
  selector: 'app-capture-subject',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './capture-subject.component.html',
  styleUrl: './capture-subject.component.css'
})
export class CaptureSubjectComponent {
  service = inject(AdminService)


  form = new FormGroup({
     subjectName:new FormControl(''),
  });
  form1 = new FormGroup({
      grade : new FormControl(''),
      subject : new FormControl(''),
      date  : new FormControl(''),
      time  : new FormControl(''),
  })

  onAddSubmit() {
    this.service.captureSubject({
      id:0,
      subjectName:this.form.value.subjectName!,
    })
  }

  onRemoveSubmit() {

  }

  onSubmit(){
   this.service.captureTimetable({
    id:0,
    grade:parseInt(this.form1.value.grade!),
    date:this.form1.value.date!,
    subjectName:this.form1.value.subject!,
    time:this.form1.value.time!
   })

   
  }
}
