import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";
import Product from "./pages/Product";
import Recommendation from "./pages/Recommendation";
import SimilarProducts from "./pages/SimilarProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Dashboard />}/>
        <Route path = "/compare" element = {<Compare />}/>
        <Route path = "/product" element = {<Product />}/>
        <Route path = "/recommendation" element = {<Recommendation />}/>
        <Route path = "/similar" element = {<SimilarProducts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;