import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { RecruiterPageComponent } from './recruiter-page/recruiter-page.component';

const routes: Routes = [
  { path: 'apply', component: ApplicantFormComponent },
  { path: 'recruit', component: RecruiterPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule
{
}
