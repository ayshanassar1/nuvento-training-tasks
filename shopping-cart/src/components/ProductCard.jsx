
import { Card, Button, Badge } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-100 product-card shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="align-self-start mb-2">
          {product.category}
        </Badge>

        <Card.Title>{product.name}</Card.Title>

        <Card.Text className="text-secondary">
          {product.description}
        </Card.Text>

        <div className="mt-auto">
          <h5 className="product-price">₹{product.price.toLocaleString("en-IN")}</h5>

          <Button
            variant="dark"
            className="w-100"
            onClick={handleAddToCart}
          >
            <FaCartPlus className="me-2" />
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
