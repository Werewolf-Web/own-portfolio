import { Routes, Route } from "react-router-dom";
import ContactPage from "./component/contect/ContactPage";
import HomePage from "./home/HomePage";
import FooterPage from "./component/footer/FooterPage";
import Navbar from "./component/navbar/Navbar";
import ResumePage from "./component/resume/ResumePage";
import AboutPage from "./component/about/AboutPage";
import ServicePage from "./component/service-page/ServicePage";
import ProjectPage from "./component/project-page/ProjectPage";

function App() {
  return (
     <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-me" element={<ContactPage/>} />
      <Route path="/resume" element={<ResumePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
    <FooterPage/></>
  );
}

export default App;