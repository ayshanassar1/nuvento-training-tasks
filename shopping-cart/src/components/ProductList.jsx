
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <Container className="py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold text-black">Our Products</h2>
          <p className="text-secondary mb-0">
            Find something you love.
          </p>
        </div>

        <Form.Select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
          style={{ maxWidth: "200px" }}
          aria-label="Filter products by category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </div>

      <Row className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
