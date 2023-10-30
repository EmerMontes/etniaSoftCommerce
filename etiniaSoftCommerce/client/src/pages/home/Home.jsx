/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import CardContainer from "../../components/cardsContainer/CardsContainer";
import NavBar from "../../components/navBar/NavBar";
import Filters from "../../components/filters/Filters";
import { getFiltersAndPagination } from "../../redux/actions";
import styles from "./Home.module.css";
import Pagination from "../../components/pagination/Pagination";

function Home(props) {
  const Page = useSelector((state) => state.indexProductShow);
  const [initialPageSet, setInitialPageSet] = useState(1);
  const [initialFilters, setInitialFilters] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (!initialPageSet) {
      dispatch(getFiltersAndPagination(initialFilters, initialPageSet));
      setInitialPageSet(true);
    }
  }, [initialPageSet, dispatch]);

  const loadProducts = async () => {
    if (!Page.length) {
      await dispatch(getFiltersAndPagination(initialFilters, initialPageSet));
    }
  };

  useEffect(() => {
    loadProducts();
    console.log(initialFilters)
  }, [dispatch, initialFilters, initialPageSet]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInitialFilters({ ...initialFilters, [name]: value });
    setInitialPageSet(1); // Reiniciar a la página 1 cuando se cambian los filtros
    dispatch(getFiltersAndPagination(initialFilters, initialPageSet));
  };
  
  const onCloseFilters = (value)=>{
    setInitialFilters({
      ...initialFilters,
      [value]: ""
    })
  }

  const genderOpt = ["male", "female"];
  const categoryOpt = [
    "Camisetas",
    "Licras",
    "Tops",
    "Faldas",
    "Chaquetas",
    "Blusas",
  ];
  const colorOpt = [
    "gris jasped",
    "verde menta",
    "negro",
    "gris Oscuro",
    "mora en leche",
    "blanco",
    "palo de rosa claro",
  ];
  const saleOpt = ["sale", "no-sale"];
  const sizeOpt = ["S", "L", "M", "XS", "XXL"];
  const PriceOpt = ["highest", "lowest"];

  function Pagination() {
    let num = 1;
    if (Page && Page.info) {
      num = Page.info.page;
    }

    const dispatch = useDispatch();

    const totalPages = Page && Page.info ? Page.info.pages : 1;

    const handlePreviousClick = () => {
      setInitialPageSet(initialPageSet - 1);
      dispatch(getFiltersAndPagination(initialFilters, initialPageSet - 1));
    };

    const handleNextClick = () => {
      
      setInitialPageSet(initialPageSet + 1);
      dispatch(getFiltersAndPagination(initialFilters, initialPageSet + 1));
    };

    return (
      <div className={styles.paginationcontainer}>
        <button
          className={`${styles.paginationbutton} ${
            num === 1 && styles.paginationcurrent
          }`}
          onClick={handlePreviousClick}
        >
          {"<"}
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
          className={`${styles.paginationbutton} ${
            num === totalPages && styles.paginationcurrent
          }`}
          onClick={handleNextClick}
        >
          {">"}
        </button>
      </div>
    );
  }
  return (
    <div className={styles.home}>
      <NavBar />
      <Header />

      <div className={styles.filterscontainer}>
        <Filters
          className={styles.filters}
          name={"gender"}
          options={genderOpt}
          handleChange={handleChange}
          state={null}
        />
        <Filters
          className={styles.filters}
          name={"category"}
          options={categoryOpt}
          handleChange={handleChange}
          state={null}
        />
        <Filters
          className={styles.filters}
          name={"color"}
          options={colorOpt}
          handleChange={handleChange}
          state={null}
        />
        <Filters
          className={styles.filters}
          name={"sale"}
          options={saleOpt}
          handleChange={handleChange}
          state={null}
        />
        <Filters
          className={styles.filters}
          name={"size"}
          options={sizeOpt}
          handleChange={handleChange}
          state={null}
        />
        <Filters
          className={styles.filters}
          name={"price"}
          options={PriceOpt}
          handleChange={handleChange}
          state={null}
        />
        <button
        className={styles.button}
        onClick={() => {
          setInitialPageSet(1); // Reiniciar a la página 1 cuando se hace clic en el botón de reset
          dispatch(getFiltersAndPagination({}, 1));setInitialFilters({});
}}
>
          <img
            className={styles.reset}
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/reset-update-icon.png"
          />
        </button>
        <div></div>
        <div>
        {initialFilters?.gender && <div>
        <button onClick={()=>onCloseFilters("gender")}>X</button>
        <h2>{initialFilters.gender + " >"}</h2>
        </div>}
        </div>
        {initialFilters?.category && <div>
        <button onClick={()=>onCloseFilters("category")}>X</button>
        <h2>{initialFilters.category + " >"}</h2>
        </div>}
        {initialFilters?.color && <div>
        <button onClick={()=>onCloseFilters("color")}>X</button>
        <h2>{initialFilters.color + " >"}</h2>
        </div>}
        {initialFilters?.sale && <div>
        <button onClick={()=>onCloseFilters("sale")}>X</button>
        <h2>{initialFilters.sale + " >"}</h2>
        </div>}
        {initialFilters?.size && <div>
        <button onClick={()=>onCloseFilters("size")}>X</button>
        <h2>{initialFilters.size + " >"}</h2>
        </div>}
        {initialFilters?.price && <div>
        <button onClick={()=>onCloseFilters("price")}>X</button>
        <h2>{initialFilters.price + " >"}</h2>
        </div>}
      </div>

      <CardContainer products={Page} />
      <br />
      <br />
      <Pagination />
    </div>
  );
}

export default Home;
