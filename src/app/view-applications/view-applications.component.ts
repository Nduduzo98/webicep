import { Component, OnInit } from '@angular/core';
import { ApplyService } from './../../app/apply.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private applyIcep: ApplyService) { }
  applicationss:any=[];
  ngOnInit(): void {
  }
  getApplications(){
    this.applyIcep.getApplications().subscribe((data:any)=>this.applicationss=data);
  }

}
