/**
 * Created by solehuddien on 26/04/17.
 */
export interface RadarSearchParam{
  location: string;
  radius: string;
  type: string;
  key: string;
}

export interface RadarSearchResponse{
  html_attributions: string[];
  results: Result[];
  status: string;
}

export interface Result{
  geometry: Geometry;
  id: string;
  place_id: string;
  reference: string;
}

export interface Geometry{
  location: Location;
}

export interface Location{
  lat: string;
  lng: string;
}

export interface PhotosParam{
  maxwidth: string;
  photoreference: string;
  key: string;
}
