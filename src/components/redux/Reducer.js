const initialState = {
    table: [],
    search: [],
    filter: [],
    sheetData: [],
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
        case "ADD_SHEET_DATA":
            let noImage;
            state.table.filter(e => {
                if(e.id === action.payload) {
                     noImage = {
                        id: e.id,
                        name: e.name,
                        number: e.number,
                        date: e.date,
                        status: e.status,
                        multiple: e.multiple,
                        image: e.image,
                        images: e.images
                    }
                }
            })
            return {
                ...state,
                sheetData: state.sheetData.concat(noImage)
            }
        case "REMOVE_SHEET_DATA":
            let removeData = state.sheetData.filter(e => e.id !== action.payload)
            return {
                ...state,
                sheetData: removeData
            }
        case 'SEARCH_DATA_RANGE':
            const {startDate, endDate} = action.payload
            let format;
            let match = state.filter.filter(e => (e.date >= startDate.toJSON() && e.date <= endDate.toJSON()))
            match.length && (format = match.sort((a,b)=> new Date(a.date) > new Date(b.date) ? 1 : -1 ))
            console.log(format)
            if(format.length){
                return {
                    ...state,
                    table: format
                }
            }
            
         default: 
             return state;
     }
 }