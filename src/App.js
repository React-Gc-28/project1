import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {" "}
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
