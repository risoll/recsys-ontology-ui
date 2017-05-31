import { Pagination } from './../models/place.model';
import {Injectable} from "@angular/core";
import {Http, Jsonp, ResponseContentType, Headers} from "@angular/http";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../models/google.model";
import {API_BASE_URL, API_URL, APP_URL, GOOGLE_PLACE_URL} from "../utils/constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {DomSanitizer} from "@angular/platform-browser";
import { Place } from "../models/place.model";

/**
 * Created by solehuddien on 26/04/17.
 */
@Injectable()
export class PlaceService{

  constructor(private jsonp: Jsonp, private sanitizer: DomSanitizer, private http: Http){}

  getPlaces(params: Pagination): Observable<Place[]>{
    let url = `${API_URL}/place/pagination?limit=${params.limit}&offset=${params.offset}`;
    return this.http.get(url).map(res => res.json())
  }
}
