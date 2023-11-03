import React, { useState } from 'react'; // Import useState
import { useDispatch, useSelector } from 'react-redux';
import { getFiltersAndPagination } from '../../redux/actions';
import styles from './Pagination.module.css';

function Pagination({ setInitialPageSet, initialPageSet, setInitialFilters, initialFilters }) {
  const Page = useSelector((state) => state.indexProductShow);
  let num = 1;
  if (Page && Page.info) {
    num = Page.info.page;
  }

  const dispatch = useDispatch();
  const totalPages = Page ? Page.info.pages : 1;

  const handlePreviousClick = () => {
    setInitialPageSet(initialPageSet - 1);
    dispatch(getFiltersAndPagination(initialFilters, initialPageSet - 1));
  };

  const handleNextClick = () => {
    setInitialPageSet(initialPageSet + 1);
    dispatch(getFiltersAndPagination(initialFilters, initialPageSet + 1));
  };

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(num);

  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.paginationcontainer}>
      <button
        className={`${styles.paginationbutton} ${num === 1 && styles.paginationcurrent}`}
        onClick={handlePreviousClick}
      >
        {'<'}
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${styles.paginationbutton} ${currentPage === pageNumber && styles.paginationcurrent}`}
          onClick={() => {
            setCurrentPage(pageNumber);
            dispatch(getFiltersAndPagination(initialFilters, pageNumber));
          }}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className={`${styles.paginationbutton} ${num === totalPages && styles.paginationcurrent}`}
        onClick={handleNextClick}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;