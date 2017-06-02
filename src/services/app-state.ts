import { AttractionsState, UserState } from './../models/state.model';

export interface AppState{
    attractions: AttractionsState,
    user: UserState
}