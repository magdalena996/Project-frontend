import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Application } from '../application';

@Component({
  selector: 'app-recruiter-page',
  templateUrl: './recruiter-page.component.html',
  styleUrls: [ './recruiter-page.component.css' ]
})
export class RecruiterPageComponent implements OnInit
{
  companyName = 'INFERNO TS3';
  title = 'Odebrane podania';
  applications: Array<Application> = [];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {}

  showHomePage()
  {
    this.router.navigateByUrl('home');
  }

  showSpApplications()
  {
    document.getElementById("allApplications").hidden = true;
    document.getElementById("forSelectedPosition").hidden = false;
    document.getElementById("spApplications").hidden = false;
    document.getElementById("vipApplications").hidden = true;
    document.getElementById("helperApplications").hidden = true;
    document.getElementById("commentApplications").hidden = true;
  }

  showVipApplications()
  {
    document.getElementById("allApplications").hidden = true;
    document.getElementById("forSelectedPosition").hidden = false;
    document.getElementById("spApplications").hidden = true;
    document.getElementById("vipApplications").hidden = false;
    document.getElementById("helperApplications").hidden = true;
    document.getElementById("commentApplications").hidden = true;
  }

  showHelperApplications()
  {
    document.getElementById("allApplications").hidden = true;
    document.getElementById("forSelectedPosition").hidden = false;
    document.getElementById("spApplications").hidden = true;
    document.getElementById("vipApplications").hidden = true;
    document.getElementById("helperApplications").hidden = false;
    document.getElementById("commentApplications").hidden = true;
  }

  showCommentApplications()
  {
    document.getElementById("allApplications").hidden = true;
    document.getElementById("forSelectedPosition").hidden = false;
    document.getElementById("spApplications").hidden = true;
    document.getElementById("vipApplications").hidden = true;
    document.getElementById("helperApplications").hidden = true;
    document.getElementById("commentApplications").hidden = false;
  }

  showApplications()
  {
    this.apiService.getAllApplications().subscribe(data => {this.applications = data}, error => {console.log(error)});
    document.getElementById("allApplications").hidden = false;
    document.getElementById("forSelectedPosition").hidden = true;
  }
}
