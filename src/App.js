import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Header } from "components/Header";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "components/Footer";

const HomeView = lazy(() => import("./views/HomeView"));
const ShopListView = lazy(() => import("./views/ShopListView"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route path="/home" exact element={<HomeView />} />
          <Route path="/shop" exact element={<ShopListView />} />
          <Route path="/colection" exact element={<ShopListView />} />
          <Route path="/journal" exact element={<ShopListView />} />
          <Route path="/lookbook" exact element={<ShopListView />} />
          <Route path="/pages" exact element={<ShopListView />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
