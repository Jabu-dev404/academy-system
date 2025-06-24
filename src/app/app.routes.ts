import { Routes } from '@angular/router';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ApplicationViewComponent } from './components/application-view/application-view.component';
import { ApplicantDetatilsComponent } from './components/application-view/applicant-detatils/applicant-detatils.component';
import { OverrollInfoComponent } from './components/overroll-info/overroll-info.component';
import { CaptureSubjectComponent } from './components/capture-subject/capture-subject.component';
import { ViewRegisteredStudentsComponent } from './components/view-registered-students/view-registered-students.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { CaptureLessonComponent } from './components/capture-lesson/capture-lesson.component';

 

export const routes: Routes = [
    {
        path:'',
        component:LoginFormComponent,
        children:[
            {
                path:'sign-up',
                component:SignUpComponent,
            }
        ]
    },
    {
        path:"student-home",
        component:StudentHomeComponent,
        children: [
            {
                path:"application-form",
                component:ApplicationFormComponent
            }
        ]
    },
    {
        path:"admin-home",
        component:AdminHomeComponent,
        children:[

            {
                path:'',
                component:OverrollInfoComponent
            }

            ,
             {
                 path:"registration-form",
                 component:RegistrationFormComponent,
             },
        
            {
                path: "applications",
                component:ApplicationViewComponent,
                children:[
                    {
                        path:"applicant-details",
                        component:ApplicantDetatilsComponent,
                    }
                ]
            },
            
            {
                path:"add-subject",
                component:CaptureSubjectComponent,
            },

           
    
        ]
    },

     {
                path:'registered-students',
                component:ViewRegisteredStudentsComponent,
    },

    {
        path:'student-profile',
        component:StudentProfileComponent,
    },

    {
        path:'capture-lesson',
        component:CaptureLessonComponent,
    }
        
   
];
