import {create} from "zustand";

//create store 

export const useTest = create((set) => ({
    //state
    x:10,
    y:11,
    user:{
        name:'vin',
        age:10,
    },
    //functions to modify the state
    incrementX:()=>set(state=>({x:state.x+1})),
    decrementX:()=>set(state=>({x:state.x-1})),
    incrementXByValue:(v)=>set(state=>({x:state.x+v})),
    updateUser:()=>set(state=>({user:{...state.user,age:30}}))
}))