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
export class RecommendationService{

  constructor(private http: Http){}

  generalQuestions(): Observable<string[]>{
    let url = `${API_URL}/recomm/questions/general`;
    return this.http.get(url).map(res => res.json())
  }
}
