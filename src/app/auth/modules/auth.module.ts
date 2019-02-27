import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutes } from './auth.routes';
import { ngMaterialModule } from '../../../modules/ui/ngmaterial/ngMaterialUI.module';
import { LoginComponent } from '../login/login.component';
import { UserRegistrationComponent } from '../register/user-registration/user-registration.component';
import { UserConfirmationComponent } from '../register/user-confirmation/user-confirmation.component';
import { UserWaitingConfirmationComponent } from '../register/user-waiting-confirmation/user-waiting-confirmation.component';
import { ForgotPasswordConfirmationComponent } from '../forgot-password-confirmation/forgot-password-confirmation.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';
import { AdminWorkflowComponent } from '../admin-workflow/admin-workflow.component';
import { ConfirmEmailComponent } from '../confirm-email/confirm-email.component';
import { ConfirmInviteComponent } from '../confirm-invite/confirm-invite.component';
import { ExternalLoginComponent } from '../external-login/external-login.component';
import { InvitationSentComponent } from '../invitation-sent/invitation-sent.component';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { LockoutComponent } from '../lockout/lockout.component';
import { LoginWith2faComponent } from '../login-with2fa/login-with2fa.component';
import { LoginWithRecoveryComponent } from '../login-with-recovery/login-with-recovery.component';
import { LogoutComponent } from '../logout/logout.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { ResetPasswordConfirmationComponent } from '../reset-password-confirmation/reset-password-confirmation.component';
import { UserService } from '../services/user/user.service';
import { DataHTTPService } from '../../../services/dataHTTP.service'
import { TestAuthComponent } from '../test-auth/test-auth.component';
import { LayoutService } from '../../../services/layout.service';
import { LayoutModule } from '../../common/module/layout/layout.module';


@NgModule({
  imports: [
    FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , BrowserAnimationsModule
    , ngMaterialModule
    , LayoutModule
    , AuthRoutes
  ],
  declarations: [
    UserRegistrationComponent
    , LoginComponent
    , UserConfirmationComponent
    , ForgotPasswordConfirmationComponent
    , ForgotPasswordComponent
    , AccessDeniedComponent
    , AdminWorkflowComponent
    , ConfirmEmailComponent
    , ConfirmInviteComponent
    , ExternalLoginComponent
    , InvitationSentComponent
    , InviteUserComponent
    , LockoutComponent
    , LoginWith2faComponent
    , LoginWithRecoveryComponent
    , LogoutComponent
    , ResetPasswordComponent
    , ResetPasswordConfirmationComponent
    , TestAuthComponent 
    , UserWaitingConfirmationComponent],
  providers: [
    DataHTTPService
    , LayoutService
    , UserService]
})
export class AuthModule { }
