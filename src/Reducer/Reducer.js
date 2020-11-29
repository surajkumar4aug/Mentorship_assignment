export const initialState={
    FetchData:[],
    Postdata:[],
   
};

const reducer=(state,action)=>{
    
    switch(action.type)
    {
        case "Post":
            return{
                ...state,
                Postdata:[...state.Postdata,action.item],
          
            };
           
            case "Fetch":
                return{
                    ...state,
                    FetchData : action.item
    
                };
            default:
                return state;
    }
};
export default reducer;