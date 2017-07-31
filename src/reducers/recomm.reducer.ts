import {Place} from './../models/place.model';
import {ColsQuestion, NodeValues, Static} from './../models/recommendation.model';
import {RecommActions} from './../actions/recomm.actions';

export interface RecommState {
  selectedRootClass: string[];
  selectedClass: string[][];
  updatedClass: NodeValues[];
  loadedClass: ColsQuestion[][];
  selectedPlaces: Place[];
  distance: number;
  mode: number;
  statusMode1: string;
  statusMode2: string;
  staticData: Static;
}

const initialState = <RecommState>{
  selectedRootClass: [],
  selectedClass: [[]],
  updatedClass: [],
  loadedClass: [[]],
  selectedPlaces: [],
  distance: 5,
  mode: 1,
  statusMode1: "incomplete",
  statusMode2: "incomplete",
  staticData: {}
};

export function RecommReducer(state: RecommState = initialState, action) {
  switch (action.type) {
    case RecommActions.SELECT_ROOT_CLASS:
      return Object.assign({}, state, {selectedRootClass: action.payload});
    case RecommActions.SELECT_CLASS:
      return Object.assign({}, state, {selectedClass: action.payload});
    case RecommActions.SET_UPDATED_CLASS:
      return Object.assign({}, state, {updatedClass: action.payload});
    case RecommActions.LOAD_CLASS:
      return Object.assign({}, state, {loadedClass: action.payload});
    case RecommActions.SELECT_PLACES:
      return Object.assign({}, state, {selectedPlaces: action.payload});
    case RecommActions.SET_DISTANCE:
      return Object.assign({}, state, {distance: action.payload});
    case RecommActions.SET_MODE:
      return Object.assign({}, state, {mode: action.payload});
    case RecommActions.SET_MODE1_STATUS:
      return Object.assign({}, state, {statusMode1: action.payload});
    case RecommActions.SET_MODE2_STATUS:
      return Object.assign({}, state, {statusMode2: action.payload});
    case RecommActions.SET_STATIC:
      return Object.assign({}, state, {staticData: action.payload});
    default:
      return state;
  }
  ;
}
