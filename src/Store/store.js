import Interest from "../Pages/Interest";
import { userDataSlice,loginSlice,userInterestSlice } from "../Reducer/UserActivityReducer";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    userData:userDataSlice.reducer,
    loginStatus:loginSlice.reducer,
    Interest:userInterestSlice.reducer,
})


export const store = configureStore({
    reducer:rootReducer,
})
