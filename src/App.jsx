import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { IssuesProvider } from "./context/IssuesContext";
import AuthorityDashboardPage from "./pages/AuthorityDashboardPage";
import LandingPage from "./pages/LandingPage";
import PublicIssuesPage from "./pages/PublicIssuesPage";
import ReportIssuePage from "./pages/ReportIssuePage";
import VerificationPage from "./pages/VerificationPage";

const App = () => {
  return (
    <IssuesProvider>
      <div className="min-h-screen bg-transparent">
        <Navbar />
        <main className="pb-12">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/report" element={<ReportIssuePage />} />
            <Route path="/issues" element={<PublicIssuesPage />} />
            <Route path="/dashboard" element={<AuthorityDashboardPage />} />
            <Route path="/verify" element={<VerificationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </IssuesProvider>
  );
};

export default App;
