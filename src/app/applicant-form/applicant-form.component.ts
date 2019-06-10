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

  constructor(private router: Router) {}

  ngOnInit() {}

  showRequirements()
  {

  }

  sendApplication()
  {

  }

  showHomePage()
  {

  }
}
