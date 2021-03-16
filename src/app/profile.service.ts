import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  createUrl = "http://localhost:5000/register";
  applyUrl = "http://localhost:5000/application";
  loginUrl = "http://localhost:5000/n";
  deleteUrl = "http://localhost:5000"
  constructor(private http:HttpClient) { }
  
  createProfile(applicants:any)
  {
    return this.http.post<any>(this.createUrl,applicants)
  }
  loginUser(applicant:any){
    return this.http.post<any>(this.loginUrl,applicant)
  }
  apply(application:any)
  {
    return this.http.post<any>(this.applyUrl,application)
  }
  public getApplicants(){
    return this.http.get<any>(this.loginUrl);
  }
  public deleteStud(studentNumber:any){

    return this.http.delete<any>( this.deleteUrl+'/'+studentNumber)
}
}