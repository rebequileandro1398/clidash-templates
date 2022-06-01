const initialState = {
    table: [],
    search: [],
    filter: []
 }
 
 
 export default function reducer(state = initialState, action) {
     switch(action.type) {
 
         case 'GET_DATA': 
             return {
                 ...state,
                 table: action.payload,
                 filter: action.payload
             }
        case 'SEARCH': 
            let result = state.table.filter(e => {
                if(e.name.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.number.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.date.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.multiple.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.status.toString().toLowerCase().includes(action.payload.toLowerCase())
                || e.profile.name.toString().toLowerCase().includes(action.payload.toLowerCase())
                ) { return e; }
            })
            if(action.payload === '') result = []
             return{
                 ...state,
                search: result
             }
        case "SORT_BY":
            let data
            action.payload === 'a-z' ? data = state.filter.sort((a,z)=> a.name < z.name ? 1 : -1 ) :
            action.payload === 'a-z' ? data = state.filter.sort((a,z)=> a.name < z.name ? 1 : -1 ) :
            action.payload === 'z-a' ? data = state.filter.sort((a,z)=> a.name > z.name ? 1 : -1 ) :
            action.payload === 'last' ? data = state.filter.sort((a,z)=> new Date(a.date) < new Date(z.date) ? 1 : -1 ) :
            action.payload === 'oldest'? data = state.filter.sort((a,z)=> new Date(a.date) > new Date(z.date) ? 1 : -1 ) : 
            data = state.filter
            return {
                ...state,
                table: data.map(e => e)
            }
         default: 
             return state;
     }
 }