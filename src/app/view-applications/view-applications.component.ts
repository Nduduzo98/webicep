import { Component, OnInit } from '@angular/core';
import { ApplyService } from './../../app/apply.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private applyIcep: ApplyService) { }
  currentStatus = null;
  applicationss:any=[];
  statusToUpdate = {
    status: '',
   }
  ngOnInit(): void {
    this.getApplications();
  }
  getApplications(){
    this.applyIcep.getApplications().subscribe((data:any)=>this.applicationss=data);
  }
 
  update(applicants:any){
    this.statusToUpdate = applicants;
  }
  deleteApp(studentno:number){
    this.applyIcep.deleteApp(studentno).subscribe(data => {
      this.getApplications();
    })
  }
  reloadpage(){
    
    location.reload()
  }

}
