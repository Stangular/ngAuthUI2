export class UserModel {

  token: string = '';
  username: string = '';
  loggedIn: Date;
  expiration: Date;
  message: string = '';

  constructor() { }
}
