import {ActionReducer, Action} from '@ngrx/store';  
import {AttractionsActions} from '../actions/attractions.actions';

export function AttractionsReducer(state = [], action) {  
    switch(action.type) {
        case AttractionsActions.SET_ATTRACTIONS_LOAD_STATUS:
            return Object.assign({}, state, { attractionsLoadStatus: action.payload });
        case AttractionsActions.SELECT_PLACE:
            return Object.assign({}, state, { selectedPlace: action.payload });
        
        default:
            return state;
    };
}