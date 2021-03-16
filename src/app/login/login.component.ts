import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../app/profile.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {}
  constructor(private loginProf: ProfileService) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.loginProf.loginUser(this.loginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
