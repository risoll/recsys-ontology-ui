import { ColsQuestion } from './../models/recommendation.model';
import { RecommActions } from './../actions/recomm.actions';
import {ActionReducer, Action} from '@ngrx/store';  

export interface RecommState{
    selectedClass: string[][];
    loadedClass: ColsQuestion[][];
}

const initialState = <RecommState>{
    selectedClass: [[]],
    loadedClass: [[]]
}

export function RecommReducer(state: RecommState = initialState, action) {  
    switch(action.type) {
        case RecommActions.SELECT_CLASS:
            return Object.assign({}, state, { selectedClass: action.payload });
        case RecommActions.LOAD_CLASS:
            return Object.assign({}, state, { loadedClass: action.payload });
        default:
            return state;
    };
}