import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Sidebar component for DSA pages
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Projects from "./pages/Projects";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";
import Beginner from "./pages/Beginner"; // Beginner Page
import Intermediate from "./pages/Intermediate"; // Intermediate Page
import Advance from "./pages/Advance"; // Advance Page
import { ThemeProvider } from "./context/ThemeContext";

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = ["/easy", "/medium", "/hard"].includes(location.pathname);

  return (
    <div className="flex bg-slate-600">
      <div className="bg-black">{showSidebar && <Sidebar />}</div>
      <div className="flex-1 top-0">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={ <Layout><Problems /></Layout>} />
          <Route path="/projects" element={ <Layout><Projects /></Layout>} />
          <Route path="/easy" element={<Layout><Easy /></Layout>} />
          <Route path="/medium" element={<Layout><Medium /></Layout>} />
          <Route path="/hard" element={<Layout><Hard /></Layout>} />
          <Route path="/beginner" element={ <Layout><Beginner /></Layout>} />
          <Route path="/intermediate" element={ <Layout><Intermediate /></Layout>} />
          <Route path="/advance" element={ <Layout><Advance /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
