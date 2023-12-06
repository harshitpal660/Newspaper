import Interest from "../Pages/Interest";
import { userDataSlice,loginSlice,userInterestSlice,querySlice,fetchedDataSlice } from "../Reducer/UserActivityReducer";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    userData:userDataSlice.reducer,
    loginStatus:loginSlice.reducer,
    Interest:userInterestSlice.reducer,
    query:querySlice.reducer,
    data:fetchedDataSlice.reducer,
})


export const store = configureStore({
    reducer:rootReducer,
})
