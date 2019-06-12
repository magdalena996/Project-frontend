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

  // ifShow = false;

  // spDescription = 'Opis sp';
  // vipDescription = 'Opis vip';
  // helperDescription = 'Opis pomocnik';
  // commentDescription = 'Opis komentator';

  constructor(private router: Router)
  {
  }

  ngOnInit()
  {
  }

  showApplicantForm()
  {
    this.router.navigateByUrl('apply');
  }

  showRecruitPage()
  {
    this.router.navigateByUrl('recruit');
  }

  // showDescription()
  // {
  //   if (this.ifShow)
  //   {
  //     document.getElementById('positionDescription').removeChild(document.getElementById('preP'));
  //   }
  //
  //   var p = document.createElement('p');
  //   p.id = 'preP';
  //   p.style.fontSize = '24px';
  //   p.style.fontFamily = 'Consolas, sans-serif';
  //   p.style.textJustify = 'true';
  //
  // }

  showSpDescription()
  {
    document.getElementById("spDescription").hidden = false;
    document.getElementById("vipDescription").hidden = true;
    document.getElementById("helperDescription").hidden = true;
    document.getElementById("commentDescription").hidden = true;

  }

  showVipDescription()
  {
    document.getElementById("spDescription").hidden = true;
    document.getElementById("vipDescription").hidden = false;
    document.getElementById("helperDescription").hidden = true;
    document.getElementById("commentDescription").hidden = true;

  }

  showHelperDescription()
  {
    document.getElementById("spDescription").hidden = true;
    document.getElementById("vipDescription").hidden = true;
    document.getElementById("helperDescription").hidden = false;
    document.getElementById("commentDescription").hidden = true;

  }

  showCommentDescription()
  {
    document.getElementById("spDescription").hidden = true;
    document.getElementById("vipDescription").hidden = true;
    document.getElementById("helperDescription").hidden = true;
    document.getElementById("commentDescription").hidden = false;

  }
}
