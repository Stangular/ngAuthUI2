import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'content-utility',
  templateUrl: './content-utility.component.html',
  styleUrls: ['./content-utility.component.css']
})
export class ContentUtilityComponent implements OnInit {
  layoutIndex: number = -1;
  @Input() layoutName: string = 'base';
  constructor(private layout: LayoutService) {
    this.layoutName = 'base';
  }

  ngOnInit() {
    this.layoutIndex = this.layout.getPatternIndex(this.layoutName);
  }
}
