import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selectedFile:any = null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post("http://localhost:5000//upload_file",fd).subscribe(res => {
      console.log(res);
    })
  }
}
