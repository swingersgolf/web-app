import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col items-center font-primary">
        <Router>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
      </div>
  )
}

export default App
