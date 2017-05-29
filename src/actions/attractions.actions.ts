import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';


@Injectable()
export class AttractionsActions {
    static SET_ATTRACTIONS_LOAD_STATUS = '[Attractions] Set Attractions Load Status';
    setAttractionsLoadStatus(status: string){
        return{
            type: AttractionsActions.SET_ATTRACTIONS_LOAD_STATUS,
            payload: status
        }
    }
}