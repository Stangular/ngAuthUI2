import { Injectable, Inject } from '@angular/core';
import {
  Http, Response, Headers, RequestOptions, URLSearchParams
} from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../app/auth/services/user/user.service';
//import { IElementDefinition } from '../UI/model/ElementDefinition';
//import { FormGroup } from '@angular/forms';
//import 'rxjs/add/operator/map';
//mport 'rxjs/add/operator/catch';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
//import { IForm } from '../model/form/form';

@Injectable()
export class DataHTTPService {

  private _options: RequestOptions;
  private _headers: HttpHeaders = new HttpHeaders();

  private _startupData: any;
  constructor(private http: HttpClient, private userService: UserService) {}

  private processData(res: any) {
    //this._records.

    return res || {}; //TODO: Need an 'Empty records type' for || error state.
  }

  protected handleError(error: Response) {
    // ErrorManager.HandleError(error);
    return error.statusText;
  }

  get httpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.userService.Token || ''
      })
    };
    return httpOptions;
  }

  getContent(restPath: string = 'http://localhost:52462/api/data/GetFilteredContent'): Observable<any> {
    
    return this.http.get(restPath, this.httpOptions)
      .pipe(map(response => this.processData(response), catchError(this.handleError)));
  }

  startUpPromise(restPath: string): Promise<any> {
    this._startupData = null;
    return this.http.get(restPath, this.httpOptions)
      .pipe(map(response => response, catchError(this.handleError))).toPromise()
      .then((data: any) => this._startupData = data);
  }

  get startupData(): any {
    return this._startupData;
  }

  postContent(content: any, restPath: string = 'https://localhost:44306/api/Auth/RegisterUser'): Observable<any> {
    return this.http.post(
      restPath
      , content, this.httpOptions)
      .pipe(map(response =>
        this.processData(response),
        catchError(this.handleError)));
  }

  updateContent(content: any, restPath: string = 'http://localhost:52462/api/data'): Observable<any> {

    return this.http.put(
      restPath, content)
      .pipe(map(response =>
        this.processData(response),
        catchError(this.handleError)));
  }

  deleteContent(content: any, restPath: string = 'http://localhost:52462/api/data/DeletePost'): Observable<any> {

    return this.http.post(
      restPath, content)
      .pipe(map(response =>
        this.processData(response),
        catchError(this.handleError)));
  }
}
