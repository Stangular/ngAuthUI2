import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ngMaterialModule } from '../../../../modules/ui/ngmaterial/ngMaterialUI.module';
import { LayoutService } from '../../../../services/layout.service';
import { ContentUtilityComponent } from '../../content-utility/content-utility.component';
@NgModule({
  imports: [
    CommonModule
    , ngMaterialModule
    , FormsModule
  ],
  declarations: [ContentUtilityComponent],
  providers: [LayoutService],
  exports: [ContentUtilityComponent]
})
export class LayoutModule { }
