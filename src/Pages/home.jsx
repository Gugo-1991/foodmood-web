import React from "react";
import MainSlider from "../components/MainSlider/mainSlider";
import Products from "./products";
import ProductTabs from "../components/ProductSliderTabs/productSlider";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <MainSlider />
      <section className="watchesTypes">
        <Container className="p-5">
          <div className="d-flex justify-content-around"></div>
        </Container>
      </section>
      <ProductTabs />
      <section className="watchesTypes">
        <Container className="p-5">
          <div className="d-flex justify-content-around"></div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
