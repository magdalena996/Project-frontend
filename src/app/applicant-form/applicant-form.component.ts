import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Application } from '../application';

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
  age: number;
  nick: string;
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

  ifWroteInfo = false;
  ifError = false;

  ifCreated = false;
  knowledgeTs3: number;
  ranks: number;
  createChannels: number;
  groupWork: number;
  wordsAboutSelf: string;
  whyApply: string;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {}

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
    this.ifError = false;
    this.checkForm();
    if (!this.ifError)
    {
      var h = document.getElementById('toHidden');
      h.hidden = true;
      var box = document.getElementById('afterSend');
      box.hidden = false;

      let application: Application = {name: this.name, nick: this.nick, age: this.age, position: this.position,
        knowledgeTs3: this.knowledgeTs3, ranks: this.ranks, createChannels: this.createChannels,
        groupWork: this.groupWork, wordsAboutSelf: this.wordsAboutSelf, whyApply: this.whyApply};
      this.apiService.sendApplication(application).subscribe(success => {console.log(success)}, error => {console.log(error)});
    }
  }

  normalizeInputValues()
  {
    if(this.knowledgeTs3 > 10)
      this.knowledgeTs3 = 10;

    if(this.ranks > 10)
      this.ranks = 10;

    if(this.createChannels > 10)
      this.createChannels = 10;

    if(this.groupWork > 10)
      this.groupWork = 10;

    if(this.knowledgeTs3 < 1)
      this.knowledgeTs3 = 1;

    if(this.ranks < 1)
      this.ranks = 1;

    if(this.createChannels < 1)
      this.createChannels = 1;

    if(this.groupWork < 1)
      this.groupWork = 1;
  }

  showHomePage()
  {
    this.router.navigateByUrl('home');
  }

  checkForm()
  {
    if (this.ifWroteInfo)
    {
      document.getElementById('formInfo').removeChild(document.getElementById('preP'));
    }

    var p = document.createElement('p');
    p.id = 'preP';
    p.style.color = 'red';
    p.style.fontSize = '18px';
    p.style.fontFamily = 'Consolas';
    p.style.fontWeight = 'bold';

    if (!this.position)
    {
      var text = document.createTextNode(' Stanowisko nie zostało wybrane! ');
      p.appendChild(text);
      document.getElementById('formInfo').hidden = false;
      document.getElementById('formInfo').appendChild(p);
      this.ifWroteInfo = true;
      this.ifError = true;
    }

    if (!this.name || !this.nick || !this.age || !this.knowledgeTs3 || !this.ranks || !this.createChannels
      || !this.groupWork || !this.wordsAboutSelf || !this.whyApply)
    {
      var text = document.createTextNode(' Wszystkie pola formularza muszą być wypełnione! ');
      p.appendChild(text);
      document.getElementById('formInfo').hidden = false;
      document.getElementById('formInfo').appendChild(p);
      this.ifWroteInfo = true;
      this.ifError = true;
    }

    if (!this.agree)
    {
      var label = document.getElementById('agreeLabel');
      setTimeout(function()
      {
        label.style.color = 'black';

      }, 1000);
      label.style.color = 'red';
      this.ifError = true;
    }
    this.normalizeInputValues();
  }
}
