const initialState = {
    table: [],
    search: []
 }
 
 
 export default function reducer(state = initialState, action) {
     switch(action.type) {
 
         case 'GET_DATA': 
             return {
                 ...state,
                 table: action.payload
             }
        case 'SEARCH': 
            let result = state.table.filter(e => {
                if(e.name.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.number.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.date.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.multiple.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.status.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.profile.name.toString().toLowerCase().includes(action.payload.toLowerCase())
                ) {
                    return e;
                }
            })
            if(action.payload === '') result = []
             return{
                 ...state,
                search: result
             }
         default: 
             return state;
     }
 }