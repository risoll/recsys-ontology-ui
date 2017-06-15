import { Place } from './../models/place.model';
import { ColsQuestion } from './../models/recommendation.model';
import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';


@Injectable()
export class RecommActions {
    static SELECT_ROOT_CLASS = '[Recomm] Select Root Class';
    selectRootClass(node: string[]){
        return{
            type: RecommActions.SELECT_ROOT_CLASS,
            payload: node
        }
    }

    static SELECT_CLASS = '[Recomm] Select Class';
    selectClass(node: string[][]){
        return{
            type: RecommActions.SELECT_CLASS,
            payload: node
        }
    }

    static LOAD_CLASS = '[Recomm] Load Class';
    loadClass(node: ColsQuestion[][]){
        return{
            type: RecommActions.LOAD_CLASS,
            payload: node
        }
    }

    static SELECT_PLACES = '[Recomm] Select Places';
    selectPlaces(node: Place[]){
        return{
            type: RecommActions.SELECT_PLACES,
            payload: node
        }
    }
}