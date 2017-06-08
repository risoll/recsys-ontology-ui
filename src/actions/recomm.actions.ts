import { ColsQuestion } from './../models/recommendation.model';
import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';


@Injectable()
export class RecommActions {
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
}