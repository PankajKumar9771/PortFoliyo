import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
// import Tada from "react-reaveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <div id="app-container">
          <Layout />
          <div className="container">
            <About />
            <Education />
            <Techstack />
            <Projects />
            {/* <WorkExp /> */}
            <Contact />
          </div>
          <div className="footer pb-3 ms-3">
            <h4 className="text-center">
              © 2024 Pankaj Kumar. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
