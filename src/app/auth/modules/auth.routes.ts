import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'confirmUserEmail', component: UserConfirmationComponent },
  { path: 'userEmailConfirmationWait', component: UserWaitingConfirmationComponent },
  { path: 'forgotPasswordConfirmation', component: ForgotPasswordConfirmationComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'accessDenied', component: AccessDeniedComponent },
  { path: 'adminWorkflow', component: AdminWorkflowComponent },
  { path: 'adminWorkflow', component: AdminWorkflowComponent },
  { path: 'confirmEmail', component: ConfirmEmailComponent },
  { path: 'confirmInvite', component: ConfirmInviteComponent },
  { path: 'externalLogin', component: ExternalLoginComponent },
  { path: 'invitationSent', component: InvitationSentComponent },
  { path: 'inviteUser', component: InviteUserComponent },
  { path: 'lockout', component: LockoutComponent },
  { path: 'loginWith2fa', component: LoginWith2faComponent },
  { path: 'loginWithRecovery', component: LoginWithRecoveryComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'resetPasswordConfirmation', component: ResetPasswordConfirmationComponent }
];


export const AuthRoutes: ModuleWithProviders = RouterModule.forChild(routes);
