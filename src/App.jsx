import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
// import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/about" element={<Main />} /> */}
          {/* <Route path="/contact" element={<Main />} /> */}
          {/* <Route path="/login" element={<Main />} /> */}
          {/* <Route path="/sign" element={<Main />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
