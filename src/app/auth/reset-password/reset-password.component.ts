import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataHTTPService } from '../../../services/dataHTTP.service';
import { MatSnackBar } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class MyOtherErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  matcherB = new MyOtherErrorStateMatcher();
  rForm: FormGroup;
  model = { Email: '', Code: '',Password: '', ConfirmPassword: '' };
  constructor(
    private _formBuilder: FormBuilder,
    private _http: DataHTTPService,
    private snacker: MatSnackBar,
    private _aRoute: ActivatedRoute,
    private router: Router) {
    let self = this;
    _aRoute.queryParams.subscribe(
      params => {
        console.error(params.Email);
        self.model.Email = params.Email || '*';
        self.model.Code = params.Code || '*';
      });
    this.rForm = this._formBuilder.group({
      passwordA: ["", [Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/)]],
      passwordB: [""]
    }, { validator: this.checkPasswords });}

  ngOnInit() {}

  Submit() {
    this.model.Password = this.rForm.controls['passwordA'].value;
    this.model.ConfirmPassword = this.rForm.controls['passwordB'].value;
    console.error(JSON.stringify(this.model));
    this._http.postContent(this.model, "https://localhost:44306/api/Auth/ResetPassword").subscribe(
      data => { this.saveSuccess(data) },
      err => { this.saveFail(err) });
  }
  
  Snack(message: string) {

    this.snacker.open(message, 'Close', { duration: 2500, horizontalPosition: 'right', verticalPosition: 'bottom' });
  }

  saveSuccess(data: any) {
    this.Snack('Request Succeeded.');
  }

  saveFail(data: any) {
    console.error(JSON.stringify(data));
    this.Snack('Request Failed');
  }


  checkPasswords(grp: FormGroup) { // here we have the 'passwords' group

    return (grp.get("passwordB").value == grp.get("passwordA").value) ? null : { notSame: true }

  }
}
