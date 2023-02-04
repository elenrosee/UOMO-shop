import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Header } from "components/Header";
import { GlobalStyle } from "./GlobalStyle";

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
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
