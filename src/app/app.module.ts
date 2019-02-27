import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/modules/auth.module';
import { LayoutModule } from './common/module/layout/layout.module';
import { PublicModule } from './public/module/public.module';
import { AppComponent } from './app.component';
import { ngMaterialModule } from '../modules/ui/ngmaterial/ngMaterialUI.module';
import { AppRoutes } from './app.routes';
import { EditorComponent } from './admin/editor/editor.component';
import { PrimaryAdminComponent } from './admin/primary-admin/primary-admin.component';
import { SecondaryAdminComponent } from './admin/secondary-admin/secondary-admin.component';
import { StandardAdminComponent } from './admin/standard-admin/standard-admin.component';
import { UserComponent } from './admin/user/user.component';
import { GridUtilityComponent } from './common/grid-utility/grid-utility.component';
import { FormUtilityComponent } from './common/form-utility/form-utility.component';
import { FieldUtilityComponent } from './common/field-utility/field-utility.component';
import { EmailFieldComponent } from './common/fieldTypes/email-field/email-field.component';
import { PasswordFieldComponent } from './common/fieldTypes/password-field/password-field.component';
import { SocialComponent } from './auth/login/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PrimaryAdminComponent,
    SecondaryAdminComponent,
    StandardAdminComponent,
    UserComponent,
    GridUtilityComponent,
    FormUtilityComponent,
    FieldUtilityComponent,
    EmailFieldComponent,
    PasswordFieldComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
    , RouterModule
    , AuthModule
    , ngMaterialModule
    , LayoutModule
    , PublicModule
    , AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutModule]
})
export class AppModule { }
