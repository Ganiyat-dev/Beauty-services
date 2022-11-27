import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/about/About";
import Booking from "./pages/booking/Booking";
import Contact from "./pages/contact/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/services/Services";
import Plans from "./pages/plans/Plans";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path='plans' element={<Plans/>}/>
        <Route path="services" element={<Services />} />
        <Route path="register" element={<Register />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
