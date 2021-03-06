import counter from "./counterReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter,
    auth
});

export default rootReducer;
