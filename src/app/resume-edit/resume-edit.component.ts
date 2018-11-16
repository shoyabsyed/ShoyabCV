import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css']
})
export class ResumeEditComponent implements OnInit {


  basicForm: FormGroup;
  experienceForm: FormGroup;
  educationForm: FormGroup;
  contactForm: FormGroup;
  // name: string = "Shoyab Akthar";


  constructor(
    private basicFormBuilder: FormBuilder,
    private experienceFormBuilder: FormBuilder,
    private educationFormBuilder: FormBuilder,
    private contactFormBuilder: FormBuilder



  ) {
    console.log("First Time value for formBasic" , this.basicForm);
    console.log("First Time value for formExperience" , this.experienceForm);
    console.log("First Time value for formEduaction" , this.educationForm);
    console.log("First Time value for formContact" , this.contactForm);

  }


  ngOnInit() {

    console.log("First Time value for basicForm in NgOnInit" , this.basicForm);
    this.basicForm = this.basicFormBuilder.group({
      firstName: ['' , Validators.required],
      lastName: [''],
      jobTitle: [''],
      gmail: [''],
      about: [""]
    });
    console.log("Value for basicForm in NgOnInit after form initialize" , this.basicForm);

    //-----------------------------------------------------------------------------------------

    console.log("my values of experienceForm  before NgonInit" , this.experienceForm);
    this.experienceForm = this.experienceFormBuilder.group({
      jobName: [""],
      companyName: [""],
      aboutJob: [""],
      fromDate: [""],
      endDate: [""]
    });
    console.log("my values of experienceForm after NgonInit " , this.experienceForm);

    //--------------------------------------------------------------------------------------------


    console.log("my values of experienceForm  before NgonInit" , this.educationForm);
    this.educationForm = this.educationFormBuilder.group({
      university: [''],
      branchName: [''],
      fromDate: [''],
      endDate: ['']
    });
    console.log("my values of educationForm after NgonInit " , this.educationForm);

    //--------------------------------------------------------------------------------------------

    console.log("my values of contactForm  before NgonInit" , this.contactForm);
    this.contactForm = this.contactFormBuilder.group({
      mobileNumber: [''],
      gmail: [''],
      address: ['']
    });
    console.log("my values of contactForm after NgonInit " , this.contactForm);
    
  }

  doMyFormSubmit() {
    console.log(":: doMyFormSubmit ::" , this.basicForm.value , this.basicForm);
  }

  formSubmit(){
    console.log("ExperienceForm Values ::" , this.experienceForm.value  ,this.experienceForm);
  }

  educationSubmit(){
    console.log("EducationForm Values ::" , this.educationForm.value , this.educationForm)
  }

  contactSubmit(){
    console.log("ContactForm Values ::" , this.contactForm.value , this.contactForm)

  }

}
