import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pagination } from '../../redux/actions';
import styles from './Pagination.module.css';

function Pagination() {
  const Page = useSelector((state) => state.pagination);
  let num = 1;
  if (Page && Page.info) {
    num = Page.info.page;
  }

  const dispatch = useDispatch();
  const totalPages = Page ? Page.info.pages : 1;

  const handlePreviousClick = () => {
    dispatch(pagination(num - 1));
  };

  const handleNextClick = () => {
    dispatch(pagination(num + 1));
  };

  return (
    <div className={styles.paginationcontainer}>
      <button
        className={`${styles.paginationbutton} ${num === 1 && styles.paginationcurrent}`}
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      {/* {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`${styles.paginationbutton} ${num === index + 1 && styles.paginationcurrent}`}
          onClick={() => dispatch(pagination(index + 1))}
        >
          {index + 1}
        </button>
      ))} */}
      <button
        className={`${styles.paginationbutton} ${num === totalPages && styles.paginationcurrent}`}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
