import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>      
       {/* All pages using Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />          
        </Route>

        {/* ✅ Add this route separately for Sign In */}
        <Route path="/signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



