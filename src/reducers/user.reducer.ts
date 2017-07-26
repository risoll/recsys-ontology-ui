import { Location } from './../models/google.model';
import { UserActions } from './../actions/user.actions';
import { IpApi } from "../models/user.model";

export interface UserState {
    ipApi: IpApi,
    location: Location
}

const initialState = <UserState>{
    ipApi: {},
    location: {
			lat: -6.917464,
			lng: 107.619123
		}
}

export function UserReducer(state: UserState = initialState, action) {
    switch(action.type) {
        case UserActions.SET_IP_API:
            return Object.assign({}, state, { ipApi: action.payload });
        case UserActions.SET_LOCATION:
            return Object.assign({}, state, { location: action.payload });
        
        default:
            return state;
    };
}
