import { Place } from './../models/place.model';
import {Injectable} from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import {API_URL} from "../utils/constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Pagination } from "../models/place.model";
/**
 * Created by solehuddien on 26/04/17.
 */
@Injectable()
export class PlaceService{

  constructor(private http: Http){}

  getPlaces(params: Pagination): Observable<Place[]>{
    let url = `${API_URL}/place/pagination?limit=${params.limit}&offset=${params.offset}`;
    return this.http.get(url).map(res => res.json())
  }

  getPlacesByCategories(params: string[]): Observable<Place[]>{
    // console.log("params", params);
    let url = `${API_URL}/place/bulk/categories`;
    let body = JSON.stringify(params);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .map(res => <Place[]>res.json())
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
