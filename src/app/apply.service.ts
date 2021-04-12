import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  applyUrl = "http://localhost:5000/application";
  updateUrl = "http://localhost:5000/update"
  displayUrl = "http://localhost:4000/applications";
  deleteUrl = "http://localhost:4000"
  constructor(private http:HttpClient) { }
  apply(application:any)
  {
    return this.http.post<any>(this.applyUrl,application)
  }
  public getApplications(){
    return this.http.get<any>(this.displayUrl);
  }
  updateReply(applicants:any){
    return this.http.put(this.updateUrl, applicants)
  }
  public deleteApp(studentNo:any){

    return this.http.delete<any>( this.deleteUrl+'/'+studentNo)
}
  
} 