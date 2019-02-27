import { Component, HostListener, OnInit} from '@angular/core';
import { LayoutService } from '../services/layout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AuthUI';


  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.Layout.SetWindowWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.layout.Layout.SetWindowWidth(window.innerWidth);
  }
}
