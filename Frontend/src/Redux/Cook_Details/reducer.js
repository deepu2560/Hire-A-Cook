import {COOK_DETAILS} from "./actions"

const initState = {
    cookDetails:[]
}

export const cookReducer = (state=initState,{type,payload})=>
{   
    switch(type)
    {
        case COOK_DETAILS:
            return {...state,cookDetails:payload}
        default:
            return state;
    }
    
}