import { Question, BacktrackClass, DownPropagationResponse, NodeValues } from './../models/recommendation.model';
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions } from "@angular/http";
import {API_URL} from "../utils/constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {UpPropagationParams, UpPropagationV2Response} from '../models/recommendation.model';
import { Place } from '../models/place.model';
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

  getParent(node: string): Observable<Question[]>{
    let url = `${API_URL}/recomm/class/parents?node=${this.parseNode(node)}`;
    return this.http.get(url).map(res => res.json())
  }

  getChildren(node: string): Observable<Question[]>{
    let url = `${API_URL}/recomm/class/children?node=${this.parseNode(node)}`;
    return this.http.get(url).map(res => res.json())
  }


  getBulkChildren(params: string[]): Observable<Question[]>{
    let url = `${API_URL}/recomm/class/bulk/children`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <Question[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBulkParent(params: string[]): Observable<Question[]>{
    let url = `${API_URL}/recomm/class/bulk/parents`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <Question[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  traverseNode(params: string[]): Observable<BacktrackClass[]>{
    let url = `${API_URL}/recomm/individual/traverse/bulk`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <BacktrackClass[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  downPropagation(params: NodeValues[]): Observable<DownPropagationResponse>{
    let url = `${API_URL}/recomm/propagation/downward`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <DownPropagationResponse>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  upPropagation(params: UpPropagationParams): Observable<Place[]>{
    let url = `${API_URL}/recomm/propagation/upward`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <Place[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  downPropagationV2(params: NodeValues[]): Observable<DownPropagationResponse>{
    let url = `${API_URL}/recomm/propagation/downwardv2`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <DownPropagationResponse>res.json())
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  upPropagationV2(params: UpPropagationParams): Observable<UpPropagationV2Response>{
    let url = `${API_URL}/recomm/propagation/upwardv2`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <UpPropagationV2Response>res.json())
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  parseNode(node: string): string{
    return node.replace(" ", "%20");
  }
}
