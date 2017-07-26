import { Place } from './../models/place.model';
import { ColsQuestion } from './../models/recommendation.model';
import {Injectable} from '@angular/core';
import { NodeValues } from '../models/recommendation.model';


@Injectable()
export class RecommActions {
    static SELECT_ROOT_CLASS = '[Recomm] Select Root Class';
    selectRootClass(node: string[]){
        return{
            type: RecommActions.SELECT_ROOT_CLASS,
            payload: node
        }
    }

    static SET_UPDATED_CLASS = '[Recomm] Set Updated Class';
    setUpdatedClass(nodes: NodeValues[]){
        return{
            type: RecommActions.SET_UPDATED_CLASS,
            payload: nodes
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

    static SET_DISTANCE = '[Recomm] Set Distance';
    setDistance(distance: number){
        return{
            type: RecommActions.SET_DISTANCE,
            payload: distance
        }
    }
}
