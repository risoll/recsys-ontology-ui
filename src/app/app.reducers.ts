import { AttractionsReducer } from "../reducers/attractions.reducer";
import { UserReducer } from "../reducers/user.reducer";
import { RecommReducer } from "../reducers/recomm.reducer";

export const APP_REDUCERS = {
    attractions: AttractionsReducer,
    user: UserReducer,
    recomm: RecommReducer
}