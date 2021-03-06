import { Component, OnInit } from '@angular/core';
import { ApplyService } from './../../app/apply.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  

  applying:any = {}
  showMsg = false;
  constructor(private applyIcep: ApplyService, private router:Router) { }

  ngOnInit(): void {
  }
  apply(){
    this.applyIcep.apply(this.applying).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
      this.showMsg = true;
    
  }
  
  
}
