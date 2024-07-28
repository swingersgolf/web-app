import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col items-center font-primary">
        <Router>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route path="/sign-in" element={<SignIn/>} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;
