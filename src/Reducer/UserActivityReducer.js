import {createSlice} from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

const localStorageKey = "interest";
// localStorage.removeItem(localStorageKey)

// I am using local storage to make data persist
if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, JSON.stringify([]));
}
const initialState = {
    isLoggedin:false,
    userData:{}, 
    interest:JSON.parse(localStorage.getItem(localStorageKey)) || [],
}

export const loginSlice = createSlice({
    name: 'Login',
    initialState:initialState.isLoggedin,
    reducers :{
        toggleLogin:(state,action)=>{
            return !state.isLoggedin;
        }
    }
})

export const userDataSlice = createSlice({
    name: 'Login',
    initialState:initialState.userData,
    reducers :{
        setUserData:(state,action)=>{
            // return !state.isLoggedin;
            const {email} = action.payload;
            const {password} = action.payload;
            const {uniqId} = action.payload;

            console.log(action.payload);
            const userDataFinal = {
                email,
                password,
                uniqId
            }
            console.log(userDataFinal);
            return userDataFinal;
        }
    }
})

export const userInterestSlice = createSlice({
    name: 'Login',
    initialState:initialState.interest,
    reducers :{
        setUserInterest:(state,action)=>{
            const {uniqId} = action.payload;
            const {interest} = action.payload;
            const currInterests = state.interest;
            console.log(action.payload);
            console.log(currInterests);
            currInterests.push({
                uniqId:interest
            })
            console.log(currInterests);
            localStorage.setItem(localStorageKey, JSON.stringify(currInterests));

            return currInterests;
        }
    }
})



export const {toggleLogin} = loginSlice.actions;
export const {setUserData} = userDataSlice.actions;
export const {setUserInterest} = userInterestSlice.actions;
