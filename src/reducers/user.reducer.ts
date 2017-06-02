import { UserActions } from './../actions/user.actions';
import {ActionReducer, Action} from '@ngrx/store';  

export function UserReducer(state = [], action) {  
    switch(action.type) {
        case UserActions.SET_IP_API:
            return Object.assign({}, state, { ipApi: action.payload });
        default:
            return state;
    };
}