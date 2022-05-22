import axios from 'axios'


export const getData = () => async (dispatch) =>{
    await axios.get("http://localhost:5000/data")
    .then(res => {
     dispatch({
         type: 'GET_DATA',
         payload: res.data
     })
    })       
}
export const modify = (id, data) => async () =>{
    await axios.patch(`http://localhost:5000/data/${id}`, data)     
}

export const modifyImage = (id, image) => async () =>{
    await axios.patch(`http://localhost:5000/data/${id}`, image)     
}