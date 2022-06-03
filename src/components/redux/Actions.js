import axios from 'axios'
const { REACT_APP_API } = process.env

export const getData = () => async (dispatch) =>{
    await axios.get(`${REACT_APP_API}`)
    .then(res => {
     dispatch({
         type: 'GET_DATA',
         payload: res.data
     })
    })       
}
export const modify = (id, data) => async (dispatch) =>{
    await axios.patch(`${REACT_APP_API}/${id}`, data)
    .then(() => {
        dispatch(getData())   
    })
}
export const newElement = (data) => async (dispatch) =>{
    await axios.post(`${REACT_APP_API}`, data)
    .then(() => {
        dispatch(getData())   
    })
}
export const onSearch = (value) => (dispatch) => {
    dispatch({
        type: 'SEARCH',
        payload: value
    })
}
export const sortBy = (value) => (dispatch) =>{
    dispatch({
        type: "SORT_BY",
        payload: value
    })
}