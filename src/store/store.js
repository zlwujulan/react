import * as actionTypes   from './action.js'
const initial=[]
export default function store(state=initial,action){
    switch(action.type){
        case actionTypes.USERINFO_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.data)
            return state
        case actionTypes.STORE_RM:
            return state.filter(item=>{
                if(item.id!==action.data.id){
                    return item
                }
            })
        default:
            return state
    }
}