import {Injectable} from "@angular/core";
import {Http, ResponseContentType, Headers} from "@angular/http";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../models/google.model";
import {GOOGLE_PLACE_URL} from "../utils/constants";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Created by solehuddien on 26/04/17.
 */
@Injectable()
export class GoogleService{
  constructor(private sanitizer: DomSanitizer, private http: Http){}

  radarSearch(param: RadarSearchParam): Observable<RadarSearchResponse>{
    let url = `${GOOGLE_PLACE_URL}/radarsearch/json?location=${param.location}&radius=${param.radius}&type=${param.type}&key=${param.key}`;
    return this.http.get(url).map(res=>res.json());
  }

  photoReference(param: PhotosParam): Observable<any>{
    let url = `${GOOGLE_PLACE_URL}/photo?maxwidth=${param.maxwidth}&photoreference=${param.photoreference}&key=${param.key}`
    let headers = new Headers({'Content-Type': 'image/jpeg'});
    return this.http.get(url, {
      headers: headers,
      responseType: ResponseContentType.Blob
    }).map(res => {
      return new Blob([res.blob(), {
        type: 'image/jpeg'
      }]);
    }).map(blob => {
      let urlCreator = window.URL;
      console.log("blob", blob);
      return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob))
    });
    // let url = window.URL.createObjectURL(blob);
    // console.log("url", url);
    // // window.open(url);
    // if(navigator.msSaveOrOpenBlob) {
    //   navigator.msSaveBlob(blob, fileName);
    // } else {
    //   let a = document.createElement('a');
    //   a.href = url;
    //   a.download = fileName;
    //   document.body.appendChild(a);
    //   a.click();
    //   document.body.removeChild(a);
    // }
    // // window.location.href = url;
    // window.URL.revokeObjectURL(url);

  }
}
