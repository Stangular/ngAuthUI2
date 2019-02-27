import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
//import { ColumnModel } from '../model/columnModel';
//import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'form-utility',
  templateUrl: './form-utility.component.html',
  styleUrls: ['./form-utility.component.css']
})
export class FormUtilityComponent implements OnInit {

  layoutIndex: number = -1;
  @Input() layoutName: string = '';
  rForm: FormGroup;
  constructor() { }

  ngOnInit() {
   // this.layoutIndex = this.layout.getPatternIndex(this.layoutName);
  }

  //get ColumnCount() {
  //  return this.layout.Layout.getLayoutColumnCount(this.layoutIndex);
  //}

  //get Columns() {
  //  return this.layout.Layout.getLayout(this.layoutIndex);
  //}
}
