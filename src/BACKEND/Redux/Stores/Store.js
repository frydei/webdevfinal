import {combineReducers, legacy_createStore as createStore} from "redux";
import EventsReducer from "../Reducers/EventsReducer";
import ComplaintReducer from "../Reducers/ComplaintReducer";
import UsersReducer from "../Reducers/UsersReducer";
import UserReducer from "../Reducers/UserReducer";

const reducers = combineReducers({
    events: EventsReducer,
    complaint: ComplaintReducer,
    users: UsersReducer,
    user: UserReducer
})

export const store = createStore(reducers)
