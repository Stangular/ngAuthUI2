import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataHTTPService } from '../../../../services/dataHTTP.service';
//import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

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
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  
  matcher = new MyErrorStateMatcher();
  matcherB = new MyOtherErrorStateMatcher();
  regForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _http: DataHTTPService,
    private router: Router) {

    this.regForm = this._formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      passwordA: ["", [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/)]],
      passwordB: [""]
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {}

  saveSuccess(data: any) {
    this.router.navigate(['/userEmailConfirmationWait']);
  //  this.source.LoadData(data.content, [], data.recordCount);
    //this.saveing = false;
    //this.Snack('Save succeeded');
  }

  saveFail(data: any) {
    console.error(JSON.stringify(data));
  //  this.saveing = false;
  //  this.Snack(data.error || 'Form save Failed for unknown reason');
  }

  Register() {
    const reginfo = {
      Email: this.regForm.controls['email'].value,
      Password: this.regForm.controls['passwordA'].value,
      ConfirmPassword: this.regForm.controls['passwordB'].value
    }
    this._http.postContent(reginfo, "https://localhost:44306/api/Auth/RegisterUser").subscribe(
      data => { this.saveSuccess(data) },
      err => { this.saveFail(err) });
  }

  checkPasswords(grp: FormGroup) { // here we have the 'passwords' group

    return (grp.get("passwordB").value == grp.get("passwordA").value) ? null : { notSame: true }
   
  }
}
