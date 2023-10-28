/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import CardContainer from "../../components/cardsContainer/CardsContainer";
import NavBar from "../../components/navBar/NavBar";
import Filters from "../../components/filters/Filters";
import {
  getAllProducts,
  getFilterGenero,
  getAllCategories,
  getFilterColor,
  getFilterTalla,
  getOrderPrecio,
  filtrarPorDescuento,
} from "../../redux/actions";
import styles from "./Home.module.css";
import { pagination } from "../../redux/actions";

function Home(props) {
  let num = 1;
  const Page = useSelector((state) => state.pagination);
  const [initialPageSet, setInitialPageSet] = useState(false);

  const dispatch = useDispatch();
  if (Page && Page.info) {
    num = Page.info.page;
  }

  useEffect(() => {
    if (!initialPageSet) {
      dispatch(pagination(1));
      setInitialPageSet(true);
    }
  }, [initialPageSet, dispatch]);

  const Products = useSelector((state) => state.productShow);

  const loadProducts = async () => {
    if (!Products.length) {
      await dispatch(getAllProducts());
    }
  };

  useEffect(() => {
    loadProducts();
  }, [dispatch]);

  const handlePreviousClick = () => {
    dispatch(pagination(num - 1));
  };

  const handleNextClick = () => {
    dispatch(pagination(num + 1));
    console.log(num)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "Gender") {
      dispatch(getFilterGenero(value));
    }
    if (name === "Category") {
      dispatch(getAllCategories(value));
    }
    if (name === "Color") {
      dispatch(getFilterColor(value));
    }
    if (name === "Sale") {
      console.log(value);
      dispatch(filtrarPorDescuento(value));
    }
    if (name === "Size") {
      dispatch(getFilterTalla(value));
    }
    if (name === "Price") {
      console.log(value);
      dispatch(getOrderPrecio(value));
    }
  };

  const genderOpt = ["male", "female"];
  const categoryOpt = [
    "Camisetas",
    "Vestidos",
    "Pantalones",
    "Faldas",
    "Chaquetas",
    "Blusas",
  ];
  const colorOpt = ["Azul", "Verde", "Negro", "Gris", "Rojo", "Blanco", "Rosa"];
  const saleOpt = [0, 1];
  const sizeOpt = ["S", "L", "M", "XS", "XXL"];
  const PriceOpt = ["highest", "lowest"];

  return (
    <div className={styles.home}>
      <NavBar />

      <Header />
      <Filters
        name={"Gender"}
        options={genderOpt}
        handleChange={handleChange}
        state={null}
      />
      <Filters
        name={"Category"}
        options={categoryOpt}
        handleChange={handleChange}
        state={null}
      />
      <Filters
        name={"Color"}
        options={colorOpt}
        handleChange={handleChange}
        state={null}
      />
      <Filters
        name={"Sale"}
        options={saleOpt}
        handleChange={handleChange}
        state={null}
      />
      <Filters
        name={"Size"}
        options={sizeOpt}
        handleChange={handleChange}
        state={null}
      />
      <Filters
        name={"Price"}
        options={PriceOpt}
        handleChange={handleChange}
        state={null}
      />

      <CardContainer products={Page} />
      <br />

      <div>
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <br />
      <button onClick={() => dispatch(getAllProducts())}>RESET</button>
    </div>
  );
}

export default Home;
