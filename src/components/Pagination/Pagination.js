import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Styles.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return <ReactPaginate 
  className="pagination justify-content-center gap-4 my-4" 
  forcePage={pageNumber ===1? 0 : pageNumber - 1}
  nextLabel="Next" 
  previousLabel="Prev" 
  activeClassName='active'
  nextClassName={`btn btn-info ${styles.btn}`}
  previousClassName={`btn btn-info ${styles.btn}`}
  pageClassName='page-item'
  pageLinkClassName='page-link'
  onPageChange={(data) => {
    setPageNumber(data.selected + 1)
  }}
  pageCount={info?.pages}/>;
};

export default Pagination;