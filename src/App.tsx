import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";

import { Footer, Header } from "./components";
import { HomeView } from "./views/HomeView";
import { ShopView } from "./views/ShopView";
import { SingleProductView } from "./views/SingleProductView";
import { CartView } from "./views/CartView";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/shop/:category" element={<ShopView />} />
          <Route path="/single_product/:id" element={<SingleProductView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/collection" element={<HomeView />} />
          <Route path="/journal" element={<HomeView />} />
          <Route path="/lookbook" element={<HomeView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
