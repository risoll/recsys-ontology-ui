import { IpApi } from './user.model';
import { Place } from "./place.model";
export interface AttractionsState {
    attractionsLoadStatus: string;
    selectedPlace: Place;
}

export interface UserState{
    ipApi: IpApi
}