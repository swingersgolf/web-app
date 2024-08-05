import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/marketing/LandingPage"
import Contact from "@pages/marketing/Contact";
import Privacy from "@pages/marketing/Privacy";
import Register from "@pages/marketing/Register";
import Login from "@pages/marketing/Login";
import ScrollToTop from "@utils/ScrollToTop";
import { AuthProvider } from "@contexts/AuthContext";
import Profile from "@pages/app/Profile";
import PrivateRoute from "@components/PrivateRoute";
import Home from "@pages/app/Home";

const App = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col items-center font-primary bg-primary">
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="/app" element={<PrivateRoute Component={Home}/>} />
              <Route path="/app/profile" element={<PrivateRoute Component={Profile}/>} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
  )
}

export default App;
