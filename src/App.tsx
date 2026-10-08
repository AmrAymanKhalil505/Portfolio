import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import LabPage from "./pages/LabPage";
import AdminPage from "./pages/AdminPage";
import { isWorkMode } from "./lib/siteMode";

// Lazy so client proposals never ship in the main bundle.
const ProposalPage = lazy(() => import("./pages/ProposalPage"));

const titleByPath = (pathname: string) => {
  if (pathname.startsWith("/projects/")) return "Case Study | Unity Developer Portfolio";
  if (pathname === "/projects") return "Projects | Unity Developer Portfolio";
  if (pathname === "/admin") return "Admin | Unity Developer Portfolio";
  if (pathname.startsWith("/proposal/")) return "Proposal | Amr Khalil";
  if (pathname === "/lab") return "Interactive Lab | Unity Developer Portfolio";
  return "Unity Developer Portfolio";
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = titleByPath(location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const isProposalPage = location.pathname.startsWith("/proposal/");

  // Proposals are unlisted pitches and /work pages duplicate the public site;
  // keep both out of search indexes.
  const hideFromSearch = isProposalPage || isWorkMode;
  useEffect(() => {
    if (!hideFromSearch) return;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [hideFromSearch]);

  return (
    <div className="min-h-screen bg-ink text-white">
      {!isProposalPage && <Header />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<CaseStudyPage />} />
          <Route
            path="/projects/atmosphere-guardian"
            element={<Navigate to="/projects/atmosphere-protector" replace />}
          />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/proposal/:slug"
            element={
              <Suspense fallback={null}>
                <ProposalPage />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      {!isProposalPage && <Footer />}
    </div>
  );
}

export default App;
