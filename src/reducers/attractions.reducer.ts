import { Place } from './../models/place.model';
import {AttractionsActions} from '../actions/attractions.actions';

export interface AttractionsState {
    attractionsLoadStatus: string;
    selectedPlace: Place;
}

const initialState = <AttractionsState>{
    attractionsLoadStatus: "not loaded",
    selectedPlace: <Place>{
        "place_id": "ChIJ0aULp8XFaC4RE6iy2ZTjhSo",
        "name": "Kolam Renang Oniba",
        "formatted_address": "Jl. Raya Majalaya - Cicalengka, Cikuya, Cicalengka, Bandung, Jawa Barat 40395, Indonesia",
        "phone": "0812-2184-8265",
        "length_of_visit": "",
        "tariff": 0,
        "photo": "https://lh3.googleusercontent.com/p/AF1QipPrmp6TboGNpQy-PJ9aNiTjZfpwfSxFWNDACFCS=s1600-w200-h200",
        "lat": -6.989376,
        "lng": 107.824867,
        "rating": 3,
        "monday": "8:00 AM - 5:00 PM",
        "tuesday": "8:00 AM - 5:00 PM",
        "wednesday": "8:00 AM - 5:00 PM",
        "thursday": "8:00 AM - 5:00 PM",
        "friday": "8:00 AM - 5:00 PM",
        "saturday": "8:00 AM - 5:00 PM",
        "sunday": "8:00 AM - 5:00 PM"
    }
}

export function AttractionsReducer(state: AttractionsState = initialState, action) {
    switch(action.type) {
        case AttractionsActions.SET_ATTRACTIONS_LOAD_STATUS:
            return Object.assign({}, state, { attractionsLoadStatus: action.payload });
        case AttractionsActions.SELECT_PLACE:
            return Object.assign({}, state, { selectedPlace: action.payload });

        default:
            return state;
    };
}
