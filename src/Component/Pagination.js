import React from 'react'
import ReactPaginate from 'react-paginate';


const PaginationComponent = ({getPage,pageCount}) => {

    const handlePageClick=(data)=>{
        getPage(data.selected +1)
        
    }
    
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="< previous"
    containerClassName={'pagination justify-content-center p-3'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
  />
  )
}

export default PaginationComponent
