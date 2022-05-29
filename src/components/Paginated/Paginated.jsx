import React from "react";
import "./Paginated.scss"
const Paginated = ({postsPerPage, totalPosts, setCurrentPage, currentPage}) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
       <div className="paginated-container">
           <button 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)} 
            className="next-previous">
                Previous
            </button>
           <div className="button-list">
            {
                pageNumber?.map(number => (
                    <button onClick={()=> setCurrentPage(number)}>
                        {number}
                    </button>
                ))
            }
           </div>
           <button 
            disabled={currentPage === pageNumber.length} 
            onClick={() => setCurrentPage(currentPage + 1)} 
            className="next-previous">
                Next
            </button>
       </div>
    )
}

export default Paginated