import React from "react";
import MainSlider from "../components/MainSlider/mainSlider";
import ProductTabs from "../components/ProductSliderTabs/productSlider";
import { Container } from "react-bootstrap";

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
