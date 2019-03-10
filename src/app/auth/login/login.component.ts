import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DataHTTPService } from '../../../services/dataHTTP.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../services/user/user.service';
import { LayoutService } from '../../../services/layout.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  layoutIndex: number = -1;

  constructor(
    private userService: UserService,
    private _formBuilder: FormBuilder,
    private _http: DataHTTPService,
    private layout: LayoutService) {
    this.rForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/)]]
    });
  }

  ngOnInit() {
    this.layoutIndex = this.layout.getPatternIndex('formA');
  }

  saveSuccess(data: any) {
    if (data.status[0] == 'success') {
      this.userService.SetUser(data);
    }
   //  this.router.navigate(['/userEmailConfirmationWait']);
    //  this.source.LoadData(data.content, [], data.recordCount);
    //this.saveing = false;
    //this.Snack('Save succeeded');
  }

  saveFail(data: any) {
    console.error(JSON.stringify(data));
    //  this.saveing = false;
    //  this.Snack(data.error || 'Form save Failed for unknown reason');
  }

  control(name: string) {
    return this.rForm.controls[name];
  }

  get EMail() {
    return this.control('email').value;
  }

  get Password() {
    return this.control('password').value;
  }

  login() {
    const reginfo = {
      Email: this.EMail,
      Password: this.Password
    }
    this._http.postContent(reginfo, "https://localhost:44306/api/Token").subscribe(
      data => { this.saveSuccess(data) },
      err => { this.saveFail(err) });
  }
}
