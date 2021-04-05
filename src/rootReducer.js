import uuid from "react-uuid"

const INITIAL_VALUE = []

const rootReducer = (state=INITIAL_VALUE, action) => {
    
    
    switch(action.type) {
        case "ADD_MEME":
            
            return [...state, {...action.payload, id: uuid() }]
        case "REMOVE":
            return state.filter(({id}) => id !== action.payload) 
        default:
            return state
    }
}

export default rootReducer;