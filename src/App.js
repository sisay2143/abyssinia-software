import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/headers";
import ImageSlider from "./components/imageSlider";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <ImageSlider /> */}
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/building" element={<Building />} />
          <Route path="/erp" element={<ERP />} />
          <Route path="/school" element={<School />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  );
}

// const Home = () => <div>Home Page</div>;
const Building = () => <div>Building System</div>;
const ERP = () => <div>ERP System</div>;
const School = () => <div>School System</div>;
const Services = () => <div>Services</div>;
const Projects = () => <div>Projects</div>;
const Blogs = () => <div>Blogs</div>;
const FAQs = () => <div>FAQs</div>;