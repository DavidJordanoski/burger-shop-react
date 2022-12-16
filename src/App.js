
import Routes from "./components/Routers";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Carts from "./components/UI/cart/Carts";
import { useSelector } from "react-redux";


function App() {

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
