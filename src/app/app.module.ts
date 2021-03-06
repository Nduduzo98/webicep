import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplyService } from './apply.service';
import { ProfileService } from './profile.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { MessagesComponent } from './messages/messages.component';
import { ApplyComponent } from './apply/apply.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { PostVacanciesComponent } from './post-vacancies/post-vacancies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    DashboardComponent,
    LoginComponent,
    StatusComponent,
    MessagesComponent,
    ApplyComponent,
    ProfileComponent,
    AdminComponent,
    ViewProfilesComponent,
    ViewApplicationsComponent,
    PostVacanciesComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ProfileService,ApplyService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
