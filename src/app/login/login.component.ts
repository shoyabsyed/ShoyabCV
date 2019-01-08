import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'email':         'Email must be a valid email'
    },
    'password': {
      'required':      'Password is required.'
    }
  };

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.userForm.valueChanges.subscribe(data => {
      console.log("::: valueChanges :::", data);

      if (!this.userForm) { return; }

      const form = this.userForm;
      for (const field in this.formErrors) {
        // console.log(":: field ::", field);
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }

    })
  }

  doLogin(){
    const { email, password } = this.userForm.value;
    this.auth.emailLogin(email, password ).then(response => {
      console.log("Login Response", response);
    });
    console.log("email" , email , "password" ,  password);
    
    if(email === "sdshoyab46@gmail.com" && password === "SH@Y@b!M46"){
      this.router.navigate(["/resume"]);
    }

  }

}
