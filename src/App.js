import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import Newline from "./components/Pages/Newline";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Reports from "./components/Pages/Reports";

function App() {
  return (
    <div className="App">
      <h2>Navbar</h2>
      <div className="main_containers">
        <Router>
          <Sidebar className="app_sidebar">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Newline" element={<Newline />} />
              <Route path="/Reports" element={<Reports />} />
              <Route
                path="*"
                element={
                  <>
                    <h2>Not Found</h2>
                  </>
                }
              />
              <Route />
              <Route />
            </Routes>
          </Sidebar>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
