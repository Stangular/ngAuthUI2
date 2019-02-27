import { Component } from '@angular/core';
import { DataHTTPService } from '../../../services/dataHTTP.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-test-auth',
  templateUrl: './test-auth.component.html',
  styleUrls: ['./test-auth.component.css']
})
export class TestAuthComponent {

  constructor(private http: DataHTTPService
    , private snacker: MatSnackBar) { }

  getTest() {

    this.http.getContent( "https://localhost:44306/api/Test").subscribe(
      data => { this.success(data) },
      err => { this.fail(err) });
  }

  postTest() {
   
    this.http.postContent({ value: "test" }, "https://localhost:44306/api/Test").subscribe(
      data => { this.success(data) },
      err => { this.fail(err) });
  }

  Snack(message: string) {

    this.snacker.open(message, 'Close', { duration: 2500, horizontalPosition: 'right', verticalPosition: 'bottom' });
  }
  success(data: any) {
    console.info(JSON.stringify(data));
    this.Snack('Success:');
  }
    
  fail(data: any) {
    console.error(JSON.stringify(data));
    this.Snack('Failed:');
}
  
}
