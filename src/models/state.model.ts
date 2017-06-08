import { AttractionsState } from "../reducers/attractions.reducer";
import { UserState } from "../reducers/user.reducer";
import { RecommState } from "../reducers/recomm.reducer";

export interface AppState {
    attractions: AttractionsState,
    user: UserState,
    recomm: RecommState
}