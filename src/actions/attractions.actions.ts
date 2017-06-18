import {Injectable} from '@angular/core';
import { Place } from "../models/place.model";


@Injectable()
export class AttractionsActions {
    static SET_ATTRACTIONS_LOAD_STATUS = '[Attractions] Set Attractions Load Status';
    setAttractionsLoadStatus(status: string){
        return{
            type: AttractionsActions.SET_ATTRACTIONS_LOAD_STATUS,
            payload: status
        }
    }

    static SELECT_PLACE = '[Attractions] Select Place';
    selectPlace(place: Place){
        return{
            type: AttractionsActions.SELECT_PLACE,
            payload: place
        }
    }
}
