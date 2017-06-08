import { UserActions } from './../actions/user.actions';
import {ActionReducer, Action} from '@ngrx/store';  
import { IpApi } from "../models/user.model";

export interface UserState {
    ipApi: IpApi
}

const initialState = <UserState>{
    ipApi: {}
}

export function UserReducer(state: UserState = initialState, action) {  
    switch(action.type) {
        case UserActions.SET_IP_API:
            return Object.assign({}, state, { ipApi: action.payload });
        default:
            return state;
    };
}