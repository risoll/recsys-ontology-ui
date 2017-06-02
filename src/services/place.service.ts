import { Place } from './../models/place.model';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {PhotosParam, PhotosResponse} from "../models/google.model";
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
}
