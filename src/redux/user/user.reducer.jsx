import { collection } from "firebase/firestore";

const INITIAL_STATE = {
    currentState:null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:collection.payload
            }
        default:
            return state;
    }
}

export default userReducer;