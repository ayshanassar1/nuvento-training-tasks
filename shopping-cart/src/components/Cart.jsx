
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, ListGroup } from "react-bootstrap";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../redux/cartSlice";
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaShoppingCart
} from "react-icons/fa";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">
            <FaShoppingCart className="me-2" />
            Your Cart
          </h4>

          {cartItems.length > 0 && (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <p className="text-secondary mb-0">
            Your cart is empty. Add some products!
          </p>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="px-0 py-3">
                  <div className="d-flex gap-3 align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />

                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.name}</h6>
                      <p className="text-secondary mb-2">
                        ₹{item.price.toLocaleString("en-IN")} each
                      </p>

                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          aria-label={`Decrease ${item.name} quantity`}
                          disabled={item.quantity <= 1}
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                        >
                          <FaMinus />
                        </Button>

                        <span>{item.quantity}</span>

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                        >
                          <FaPlus />
                        </Button>

                        <Button
                          variant="outline-danger"
                          size="sm"
                          aria-label={`Remove ${item.name}`}
                          onClick={() =>
                            dispatch(removeFromCart(item.id))
                          }
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    </div>

                    <strong>
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </strong>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Total items</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <span>Total price</span>
              <h5 className="fw-bold mb-0">
                ₹{totalPrice.toLocaleString("en-IN")}
              </h5>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cart;
