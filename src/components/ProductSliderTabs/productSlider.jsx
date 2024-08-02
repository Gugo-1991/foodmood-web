import Tabs from "react-bootstrap/Tabs";
import { Tab, TabContent, Container } from "react-bootstrap";

import "./index.css";
import React from "react";
import Products from "../../Pages/products";

function ProductTabs() {
  const [key, setKey] = React.useState("offers");

  return (
    <div className="productTabs">
      <Container>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 ms-4">
          <Tab eventKey="offers" title="Offers">
            <TabContent>
              <Products />
            </TabContent>
          </Tab>
          <Tab eventKey="latest" title="Latest Products">
            <TabContent></TabContent>
          </Tab>
          <Tab eventKey="special" title="Special Products">
            <TabContent></TabContent>
          </Tab>
          <Tab eventKey="best" title="BestSeller Products">
            <TabContent></TabContent>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ProductTabs;
