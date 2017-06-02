import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {PhotosParam, PhotosResponse} from "../models/google.model";
import {API_URL} from "../utils/constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
/**
 * Created by solehuddien on 26/04/17.
 */
@Injectable()
export class GoogleService{

  constructor(private http: Http){}

  getPhotos(params: PhotosParam): Observable<PhotosResponse[]>{
    let url = `${API_URL}/google/photos?lat=${params.lat}&lng=${params.lng}&radius=${params.radius}&maxWidth=${params.maxWidth}&maxHeight=${params.maxHeight}`;
    return this.http.get(url).map(res=>res.json())
  }
}
