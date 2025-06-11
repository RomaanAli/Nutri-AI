import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LoginSignup from './pages/LoginSignup';
import Result from './pages/Result';
import FAQ from "./pages/FAQ";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import BMICalculator from './pages/BMICalculator';
import DietPlan from './pages/DietPlan';
import PrivateRoute from './components/PrivateRoute'; // ⭐ Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/result" element={<Result />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* ⭐ Protected Routes */}
          <Route
            path="/bmi-calculator"
            element={
              <PrivateRoute>
                <BMICalculator />
              </PrivateRoute>
            }
          />
          <Route
            path="/diet-plan"
            element={
              <PrivateRoute>
                <DietPlan />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
