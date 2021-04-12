import { Component, OnInit } from '@angular/core';
import { ApplyService } from './../../app/apply.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private applyIcep: ApplyService) { }
  statuses:any = [];

  ngOnInit(): void {
    this.getApplications()
  }
  getApplications(){
    this.applyIcep.getApplications().subscribe((data:any)=>this.statuses=data);
  }

}
