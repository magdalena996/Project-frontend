import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: [ './applicant-form.component.css' ]
})
export class ApplicantFormComponent implements OnInit
{

  companyName = 'INFERNO TS3';
  title = 'Formularz rekrutacyjny';
  agreementText = 'Oświadczam, że udzielam INFERNO TS3 wyraźnej zgody na przetwarzanie moich danych osobowych w celach udziału w procesie rekrutacji';

  name: string;
  position: string;
  agree: string;

  requirementsSP: Array<string> = [
    'Zajmowanie się Strefą Prywatną',
    'Utrzymywanie stałego kontaktu z właścicielami kanałów prywatnych',
    'Dbanie o wygląd Strefy Prywatnej',
    'Przygotowywanie sprawozdań z pracy'
  ];

  requirementsVIP: Array<string> = [
    'Zajmowanie się Strefą VIP',
    'Utrzymywanie stałego kontaktu z właścicielami kanałów VIP',
    'Dbanie o wygląd Strefy VIP',
    'Przenoszenie kanałów niespełniających wymagań do Strefy Prywatnej',
    'Przygotowywanie sprawozdan z pracy'
  ];

  requirementsHelper: Array<string> = [ '1h', '2h', '3h' ];
  requirementsComment: Array<string> = [ '1c', '2c', '3c' ];

  ifCreated = false;

  constructor(private router: Router)
  {
  }

  ngOnInit()
  {
  }

  showRequirements()
  {
    if (this.ifCreated)
    {
      document.getElementById('requirements').removeChild(document.getElementById('preUl'));
    }

    var ul = document.createElement('ul');
    ul.id = 'preUl';

    if (this.position === 'opiekunSp')
    {
      for (let i = 0; i < this.requirementsSP.length; i++)
      {
        var li = document.createElement('li');
        var pos = document.createTextNode(this.requirementsSP[i]);
        li.appendChild(pos);
        ul.appendChild(li);
      }
      this.ifCreated = true;

    } else if (this.position === 'opiekunVip')
    {

      for (let i = 0; i < this.requirementsVIP.length; i++)
      {
        var li = document.createElement('li');
        var pos = document.createTextNode(this.requirementsVIP[i]);
        li.appendChild(pos);
        ul.appendChild(li);
      }
      this.ifCreated = true;

    } else if (this.position === 'pomocnik')
    {
      for (let i = 0; i < this.requirementsHelper.length; i++)
      {
        var li = document.createElement('li');
        var pos = document.createTextNode(this.requirementsHelper[i]);
        li.appendChild(pos);
        ul.appendChild(li);
      }
      this.ifCreated = true;

    } else if (this.position === 'komentator')
    {
      for (let i = 0; i < this.requirementsComment.length; i++)
      {
        var li = document.createElement('li');
        var pos = document.createTextNode(this.requirementsComment[i]);
        li.appendChild(pos);
        ul.appendChild(li);
      }
      this.ifCreated = true;

    } else
    {
      var error = document.createTextNode('Stanowisko nie zostało wybrane');
      var li = document.createElement('li');
      li.appendChild(error);
      ul.appendChild(li);
      this.ifCreated = true;
    }
    document.getElementById('requirements').appendChild(ul);
    ul.style.listStyleType = 'square';
    ul.style.textAlign = 'left';
    ul.style.marginLeft = '200px';
  }

  sendApplication()
  {
    if (this.agree)
    {
      var h = document.getElementById('toHidden');
      h.hidden = true;
      var box = document.getElementById('afterSend');
      box.hidden = false;
    } else
    {
      var label = document.getElementById('agreeLabel');
      setTimeout(function()
      {
        label.style.color = 'black';

      }, 1000);
      label.style.color = 'red';
    }
  }

  showHomePage()
  {
    this.router.navigateByUrl('home');
  }
}
