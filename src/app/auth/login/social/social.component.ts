import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SocialLoginResult, SocialLoginStatus, SocialLoginToken } from '../../../../services/models/socialLogin.model';
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @Input() isLogin: boolean = false;
  @Input() isRegister: boolean = false;

  authWindow: Window | null;
  providers: string[] = ['Facebook', 'Twitter'];
  constructor() {
    this.authWindow = null;

    if (window.addEventListener) {
      window.addEventListener("message", this.handleMessage.bind(this), false);
    } else {
      (<any>window).attachEvent("onmessage", this.handleMessage.bind(this));
    }
  }

  ngOnInit() {
    this.authWindow = null;

    //if (window.addEventListener) {
    //  window.addEventListener("message", this.handleMessage.bind(this), false);
    //} else {
    //  (<any>window).attachEvent("onmessage", this.handleMessage.bind(this));
    //} 
  }


  handleMessage(event: Event) {

    const message = event as MessageEvent;

    if (this.authWindow)
      this.authWindow.close();

    // Only trust messages from the below origin.
    //if (message.origin !== environment.WebApiUrlBase) {
    //  return;
    //}

    // pass results back to calling component
    const result: SocialLoginResult = JSON.parse(message.data);
    this.callback.emit(result);
  }

  login(provider: string) {
   // this.authWindow = window.open(`${environment.WebAPIURL}externalauth/login?provider=${provider}`, '_blank', 'width=600,height=400');
  }

}
