import { useDispatch, useSelector } from 'react-redux';
import { getFiltersAndPagination } from '../../redux/actions';
import styles from './Pagination.module.css';

function Pagination({ setInitialPageSet, initialPageSet, setinitialFilters, initialFilters }) {
  const Page = useSelector((state) => state.indexProductShow);
  console.log(Page);
  let num = 1;
  if (Page && Page.info) {
    num = Page.info.page;
  }

  const dispatch = useDispatch();
  const totalPages = Page ? Page.info.pages : 1;

  const handlePreviousClick = () => {
    console.log(initialPageSet);
    setInitialPageSet(initialPageSet - 1);
    dispatch(getFiltersAndPagination(initialFilters, initialPageSet - 1));
  };

  const handleNextClick = () => {
    console.log(initialPageSet);
    setInitialPageSet(initialPageSet + 1);
    dispatch(getFiltersAndPagination(initialFilters, initialPageSet + 1));
  };

  return (
    <div className={styles.paginationcontainer}>
      <button
        className={`${styles.paginationbutton} ${num === 1 && styles.paginationcurrent}`}
        onClick={handlePreviousClick}
      >
        {'<'}
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
       {'>'}
      </button>
    </div>
  );
}

export default Pagination;
