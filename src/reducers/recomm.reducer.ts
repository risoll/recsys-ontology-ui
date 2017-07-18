import { Place } from './../models/place.model';
import { ColsQuestion, NodeValues } from './../models/recommendation.model';
import { RecommActions } from './../actions/recomm.actions';

export interface RecommState{
    selectedRootClass: string[];
    selectedClass: string[][];
    updatedClass: NodeValues[];
    loadedClass: ColsQuestion[][];
    selectedPlaces: Place[];
}

const initialState = <RecommState>{
    selectedRootClass: [],
    selectedClass: [[]],
    updatedClass: [],
    loadedClass: [[]],
    selectedPlaces: []
}

export function RecommReducer(state: RecommState = initialState, action) {
    switch(action.type) {
        case RecommActions.SELECT_ROOT_CLASS:
            return Object.assign({}, state, { selectedRootClass: action.payload });
        case RecommActions.SELECT_CLASS:
            return Object.assign({}, state, { selectedClass: action.payload });
        case RecommActions.SET_UPDATED_CLASS:
            return Object.assign({}, state, { updatedClass: action.payload });
        case RecommActions.LOAD_CLASS:
            return Object.assign({}, state, { loadedClass: action.payload });
        case RecommActions.SELECT_PLACES:
            return Object.assign({}, state, { selectedPlaces: action.payload });
        default:
            return state;
    };
}
