import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 50px)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
