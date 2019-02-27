import { Injectable, Inject } from '@angular/core';
import { UserModel } from './user.model';
@Injectable()
export class UserService {
  private userModel: UserModel = new UserModel();
  constructor() { }

  SetUser(model: any ) {
    if( model.userInfo){
      this.userModel = model.userInfo;
    }
  }

  get UserName(): string {
    return this.userModel.username;
  }

  get Token(): string {
    return this.userModel.token;
  }

  get isLoggedIn(): boolean {
    return this.userModel.token.length > 0;
  }
}
