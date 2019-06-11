import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  constructor(private httpClient: HttpClient) {}

  sendApplication(application: Application)
  {
    return this.httpClient.post<boolean>("http://localhost:8080/api/applications/send", application);
  }

  getAllApplications()
  {
    return this.httpClient.get<Array<Application>>("http://localhost:8080/api/applications");
  }

  getAllApplicationsByPosition(position: string)
  {
    return this.httpClient.get<Array<Application>>("http://localhost:8080/api/applications/" + position);
  }
}
