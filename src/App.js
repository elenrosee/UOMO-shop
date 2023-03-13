import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { GlobalStyle } from "./GlobalStyle";

import { Footer, Header } from "components";

const HomeView = lazy(() => import("./views/HomeView"));
const ShopView = lazy(() => import("./views/ShopView"));
const SingleProductView = lazy(() => import("./views/SingleProductView"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route path="/home" exact element={<HomeView />} />
          <Route path="/shop/:category" exact element={<ShopView />} />
          <Route
            path="/single_product/:id"
            exact
            element={<SingleProductView />}
          />
          <Route path="/colection" exact element={<HomeView />} />
          <Route path="/journal" exact element={<HomeView />} />
          <Route path="/lookbook" exact element={<HomeView />} />
          <Route path="/pages" exact element={<HomeView />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
