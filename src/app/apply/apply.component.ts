import { Component, OnInit } from '@angular/core';
import { ApplyService } from './../../app/apply.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  

  applying:any = {}
  constructor(private applyIcep: ApplyService) { }

  ngOnInit(): void {
  }
  apply(){
    this.applyIcep.apply(this.applying).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
