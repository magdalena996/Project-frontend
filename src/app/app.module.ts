import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { RecruiterPageComponent } from './recruiter-page/recruiter-page.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApplicantFormComponent,
    RecruiterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
