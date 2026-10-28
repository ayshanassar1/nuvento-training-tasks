
import { Container, Navbar, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar bg="dark" variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand className="fw-bold">
            ShopEasy
          </Navbar.Brand>

          <Navbar.Text className="text-white">
            Cart{" "}
            <Badge bg="light" text="dark">
              {totalItems}
            </Badge>
          </Navbar.Text>
        </Container>
      </Navbar>

      <Container className="py-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-black">Welcome to ShopEasy</h1>
          <p className="text-secondary">
            Browse products and add your favourites to the cart.
          </p>
        </div>

        <section className="mb-5">
          <ProductList />
        </section>

        <section className="mt-5" id="shopping-cart">
          <Cart />
        </section>
      </Container>

      <footer className="text-center py-4 mt-4 bg-light">
        <p className="text-secondary mb-0">
          ShopEasy — Your simple shopping destination
        </p>
      </footer>
    </>
  );
}

export default App;
