import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import LabPage from "./pages/LabPage";
import AdminPage from "./pages/AdminPage";

const titleByPath = (pathname: string) => {
  if (pathname.startsWith("/projects/")) return "Case Study | Unity Developer Portfolio";
  if (pathname === "/projects") return "Projects | Unity Developer Portfolio";
  if (pathname === "/admin") return "Admin | Unity Developer Portfolio";
  if (pathname === "/lab") return "Interactive Lab | Unity Developer Portfolio";
  return "Unity Developer Portfolio";
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = titleByPath(location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<CaseStudyPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
