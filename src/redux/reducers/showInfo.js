import {type as showInfoAction} from '../actions/showInfoAction'
const defaultState = false;

function reducer(state = defaultState, {type, payload}){
    switch(type){
        case showInfoAction:
        
        if(!payload){
            return {};    
        }
        
        console.log(payload.data);
        
        return payload;

        default: 
            return state;
    }    
}

export default reducer;