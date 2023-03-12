import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { GlobalStyle } from "./GlobalStyle";

import { Footer, Header } from "components";

const HomeView = lazy(() => import("./views/HomeView"));
const ShopView = lazy(() => import("./views/ShopView"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route path="/home" exact element={<HomeView />} />
          <Route path="/shop" exact element={<ShopView />} />
          <Route path="/colection" exact element={<ShopView />} />
          <Route path="/journal" exact element={<ShopView />} />
          <Route path="/lookbook" exact element={<ShopView />} />
          <Route path="/pages" exact element={<ShopView />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
