export enum SocialLoginStatus {
  Incomplete = 0,
  RegisterSuccess = 1,
  LoginSuccess = 2,
  EmailRequired = 3
}

export class SocialLoginResult {
  error: string = '';
  hasError: boolean = false;
  status: SocialLoginStatus = SocialLoginStatus.Incomplete;
  token: SocialLoginToken | null = null;
}

export class SocialLoginToken {
  token: string = '';
  username: string = '';
  expiration: Date = new Date();
  message: string = '';
}
