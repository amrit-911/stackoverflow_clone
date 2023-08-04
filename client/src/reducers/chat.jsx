const chatReducer = (state={data:null},action) =>{
    switch(action.type){
        case "GET_CHAT":
            return {...state , data:action.data};
        case "UPDATE_CHAT":
            return {...state };
        default :
        return state;
    }
}
export default chatReducer