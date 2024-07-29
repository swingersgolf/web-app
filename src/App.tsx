import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";

const App = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col items-center font-primary">
        <Router>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;
