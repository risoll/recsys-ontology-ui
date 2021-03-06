import { Place } from './../models/place.model';
import { ColsQuestion } from './../models/recommendation.model';
import {Injectable} from '@angular/core';
import {NodeValues, Static} from '../models/recommendation.model';


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

    static SET_MODE = '[Recomm] Set Mode';
    setMode(mode: number){
        return{
            type: RecommActions.SET_MODE,
            payload: mode
        }
    }

    static SET_MODE1_STATUS = '[Recomm] Set Mode 1 Status';
    setMode1Status(status: string){
        return{
            type: RecommActions.SET_MODE1_STATUS,
            payload: status
        }
    }

    static SET_MODE2_STATUS = '[Recomm] Set Mode 2 Status';
    setMode2Status(status: string){
        return{
            type: RecommActions.SET_MODE2_STATUS,
            payload: status
        }
    }

    static SET_COMPARISON_STATUS = '[Recomm] Set Comparison Status';
    setComparisonStatus(status: string){
        return{
            type: RecommActions.SET_COMPARISON_STATUS,
            payload: status
        }
    }

    static SET_STATIC = '[Recomm] Set Static';
    setStatic(staticData: Static){
        return{
            type: RecommActions.SET_STATIC,
            payload: staticData
        }
    }
}
