import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/LandingPage"
import Contact from "@pages/Contact";
import Privacy from "@pages/Privacy";
import Register from "@pages/Register";
import Login from "@pages/Login";
import ScrollToTop from "@utils/ScrollToTop.tsx";

const App = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col items-center font-primary bg-primary">
        <Router>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/privacy" element={<Privacy/>} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;
