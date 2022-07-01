import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Films from "./pages/Films"
import Characters from "./pages/Characters"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar on every page */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/characters" element={<Characters data={Characters} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
