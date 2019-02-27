import { NgModule } from '@angular/core';
import { ngMaterialModule } from '../../../modules/ui/ngmaterial/ngMaterialUI.module';
import { LayoutModule } from '../../common/module/layout/layout.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { PublicRoutes } from './public.route';

@NgModule({
  imports: [
    PublicRoutes
    , CommonModule
    , LayoutModule
    , ngMaterialModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class PublicModule { }
