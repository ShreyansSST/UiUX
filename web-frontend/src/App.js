import React, { useContext } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Testing from "./Testing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <SigninPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignupPage />}
        />
         <Route
          path="/landing"
          element={user ? <Navigate to="/" /> : <LandingPage />}
        />

          <Route
          path="/testing"
          element={user ? <Navigate to="/" /> : <ContactUs />}
        />  
      </Routes>
    </Router>
  );
}

export default App;
