import React from "react";
import "./Paginated.scss"
const Paginated = ({postsPerPage, totalPosts, paginado}) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
       <div className="paginated-container">
           {
               pageNumber?.map(number => (
                  <ul key={number}>
                    <button onClick={()=> paginado(number)}>{number}</button>
                 </ul> 
               ))
           }
       </div>
    )
}

export default Paginated