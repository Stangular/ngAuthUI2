import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataHTTPService } from '../../../../services/dataHTTP.service';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.css']
})
export class UserConfirmationComponent implements OnInit {

  confirmation = { Email: '', Code: '' };


  constructor(
    private _http: DataHTTPService,
    private _aRoute: ActivatedRoute) {
    let self = this;
    _aRoute.queryParams.subscribe(
      params => {
        console.error(params.Email);
        self.confirmation.Email = params.Email || '*';
        self.confirmation.Code = params.Code || '*';
        //    console.error();
        console.error(JSON.stringify(this.confirmation));
        this.Confirm();
      });
  }

  saveSuccess(data: any) {
    
 //   this.router.navigate(['/userEmailConfirmationWait']);
    //  this.source.LoadData(data.content, [], data.recordCount);
    //this.saveing = false;
    //this.Snack('Save succeeded');
  }

  saveFail(data: any) {
  //  console.error(JSON.stringify(data));
    //  this.saveing = false;
    //  this.Snack(data.error || 'Form save Failed for unknown reason');
  }

  Confirm() {
    alert(JSON.stringify(this.confirmation));
    this._http.postContent(this.confirmation, "https://localhost:44306/api/Auth/ConfirmUser").subscribe(
      data => { this.saveSuccess(data) },
      err => { this.saveFail(err) });
  }

  ngOnInit() {}

}
