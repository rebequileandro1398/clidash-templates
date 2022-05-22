const initialState = {
    table: [],
 }
 
 
 export default function reducer(state = initialState, action) {
     switch(action.type) {
 
         case 'GET_DATA': 
             return {
                 ...state,
                 table: action.payload
             }
         default: 
             return state;
     }
 }