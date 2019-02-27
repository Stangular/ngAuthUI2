import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DataHTTPService } from '../../../services/dataHTTP.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../services/user/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  rForm: FormGroup;

  constructor(
    private userService: UserService,
    private _formBuilder: FormBuilder,
    private _http: DataHTTPService,
    private snacker: MatSnackBar,
    private router: Router) {
    this.rForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  submit() {
    const reginfo = {
      Email: this.EMail
    }
    this._http.postContent(reginfo, "https://localhost:44306/api/Auth/PasswordResetRequest").subscribe(
      data => { this.saveSuccess(data) },
      err => { this.saveFail(err) });
  }

  saveSuccess(data: any) {

    if (data.status[0] == 'success') {
      this.Snack('Request Succeeded.');
      this.router.navigate(['/resetPasswordConfirmation']);
    }
    else {
      this.saveFail(data);
    }
  }

  saveFail(data: any) {
    let result = JSON.stringify(data);
    console.error(result);
    this.Snack('Request Failed');
  }

  Snack(message: string) {

    this.snacker.open(message, 'Close', { duration: 2500, horizontalPosition: 'right', verticalPosition: 'bottom' });
  }

  control(name: string) {
    return this.rForm.controls[name];
  }

  get EMail() {
    return this.control('email').value;
  }

}
