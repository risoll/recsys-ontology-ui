import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions } from "@angular/http";
import {PhotosParam, PhotosResponse} from "../models/google.model";
import {API_URL} from "../utils/constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
/**
 * Created by solehuddien on 26/04/17.
 */
@Injectable()
export class RecommendationService{

  constructor(private http: Http){}

  generalQuestions(): Observable<string[]>{
    let url = `${API_URL}/recomm/questions/general`;
    return this.http.get(url).map(res => res.json())
  }

  getParent(node: string): Observable<string[]>{
    let url = `${API_URL}/recomm/class/parents?node=${this.parseNode(node)}`;
    return this.http.get(url).map(res => res.json())
  }

  getChildren(node: string): Observable<string[]>{
    let url = `${API_URL}/recomm/class/children?node=${this.parseNode(node)}`;
    return this.http.get(url).map(res => res.json())
  }


  getBulkChildren(params: string[]): Observable<string[]>{
    console.log("params", params);
    let url = `${API_URL}/recomm/class/bulk/children`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <string[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBulkParent(params: string[]): Observable<string[]>{
    let url = `${API_URL}/recomm/class/bulk/parents`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <string[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  parseNode(node: string): string{
    return node.replace(" ", "%20");
  }
}
