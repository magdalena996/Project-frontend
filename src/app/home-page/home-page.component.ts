import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [ './home-page.component.css' ]
})
export class HomePageComponent implements OnInit
{
  companyName = 'INFERNO TS3';
  title = 'Rekrutacja na administratora Team Speak 3';

  constructor(private router: Router)
  {
  }

  ngOnInit()
  {
  }

  showApplicantForm()
  {

  }

  showRecruitPage()
  {

  }

  showDescription()
  {

  }
}
