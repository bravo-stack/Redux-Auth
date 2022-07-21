
import { createStore } from "redux";
import rootReducer from "../reducers";

const reducer = (state = 0, action) => {
    console.log("@@REDUCER CALLED!!!@@")
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log("STATE CHANGED!!! New Value: ", store.getState())
})

export default store;