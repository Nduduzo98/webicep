import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  applyUrl = "http://localhost:5000/application";
  displayUrl = "";
  constructor(private http:HttpClient) { }
  apply(application:any)
  {
    return this.http.post<any>(this.applyUrl,application)
  }
  public getApplications(){
    return this.http.get<any>(this.displayUrl);
  }
}
