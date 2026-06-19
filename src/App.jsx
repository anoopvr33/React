import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnimatedBlurBackground from "./components/blur-bg";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import AdminDashboard from "./pages/admin";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="app">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="2,110,126"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
      </Routes>
      <AnimatedBlurBackground></AnimatedBlurBackground>
    </div>
  );
}

export default App;
