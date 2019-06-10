import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-page',
  templateUrl: './recruiter-page.component.html',
  styleUrls: [ './recruiter-page.component.css' ]
})
export class RecruiterPageComponent implements OnInit
{
  companyName = 'INFERNO TS3';
  title = 'Odebrane podania';

  constructor(private router: Router)
  {
  }

  ngOnInit()
  {
  }

  showApplications()
  {

  }

  showHomePage()
  {
    this.router.navigateByUrl('home');
  }
}
