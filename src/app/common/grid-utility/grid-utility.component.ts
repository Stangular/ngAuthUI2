import { Component, OnInit, Input } from '@angular/core';
import { ColumnModel } from '../../../services/models/columnModel';
import { LayoutService  } from '../../../services/layout.service';
@Component({
  selector: 'grid-utility',
  templateUrl: './grid-utility.component.html',
  styleUrls: ['./grid-utility.component.css']
})
export class GridUtilityComponent implements OnInit {

  layoutIndex: number = -1;
  @Input() layoutName: string = '';

  constructor(private layout: LayoutService) {}

  ngOnInit() {
    this.layoutIndex = this.layout.getPatternIndex(this.layoutName);
  }

  get ColumnCount() {
    return this.layout.Layout.getLayoutColumnCount(this.layoutIndex);
  }

  //get Columns() {
  //  return this.layout.Layout.getLayout(this.layoutIndex);
  //}
}
