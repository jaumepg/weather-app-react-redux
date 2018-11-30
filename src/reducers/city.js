import {SET_CITY} from './../actions';

export const city = (state={},action) =>{
    console.log(action);
    switch(action.type){
        case SET_CITY:
        //...state desgloce de state
        // en el state.city le asignara action.payload si no existiera state.city lo generaria
            return { ...state, city: action.payload}
        default: 
            return state;
    }
    
}