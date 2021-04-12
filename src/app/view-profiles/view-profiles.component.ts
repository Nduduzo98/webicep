import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../app/profile.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {

  profiles:any = [];
  constructor(private myProfile: ProfileService) { }
  
  ngOnInit(): void {
    this.getProfile();
  }
  getProfile(){
    this.myProfile.getProfile().subscribe((data:any) => this.profiles=data);
  }
  deleteProfile(email:any){
    this.myProfile.deleteProfile(email).subscribe(data => {
      this.getProfile();
    })
  }

}
