import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/LandingPage"
import Contact from "@pages/Contact";
import Privacy from "@pages/Privacy";
import Register from "@pages/Register";
import Login from "@pages/Login";
import ScrollToTop from "@utils/ScrollToTop";
import { AuthProvider } from "@contexts/AuthContext";
import PrivateRoute from "@components/PrivateRoute";
import Postings from "@pages/Postings";
import Account from "@pages/Account";

const App = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col items-center font-primary bg-background-primary">
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="/postings" element={<Postings/>} />
              <Route path="/account" element={<PrivateRoute Component={Account}/>} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
  )
}

export default App;
