import {USERINFO_UPDATE}  from './action'
// state对象
const initialState = {
   city:'南京'
};
export default function userinfo(state=initialState,action){
    switch(action.type){
        case USERINFO_UPDATE:{
            return {
               
                city:action.data.city
            }
            
        }
        default:
            return state
    }
}
