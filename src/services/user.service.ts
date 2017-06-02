import { Observable } from 'rxjs/Observable';
import { IpApi, Feedback } from './../models/user.model';
import {Headers, Http,  RequestOptions} from '@angular/http';
import { API_URL } from './../utils/constants';
import { Injectable } from '@angular/core';

/**
 * Created by solehuddien on 26/04/17.
 */
@Injectable()
export class UserService{

  constructor(private http: Http){}

  feedbacks(): Observable<string[]>{
    let url = `${API_URL}/feedback/bulk`;
    return this.http.get(url).map(res => res.json())
  }

  ipApi(): Observable<IpApi>{
    let url = "https://ipapi.co/json/";
    return this.http.get(url).map(res => res.json())
  }

  addFeedback(params: Feedback): Observable<Feedback>{
    let url = `${API_URL}/feedback/add`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <Feedback>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}