import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServiceDetail from './pages/ServiceDetail';
{/*import Services from "./pages/Services";*/}
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
        {/* Pages that share the main layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          {/*<Route path="/services" element={<Services />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Page that does not use the main layout */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




