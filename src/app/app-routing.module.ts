import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';

const routes: Routes = [
  {
    path: "login" ,
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "resume-edit",
    component: ResumeEditComponent
  }
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
