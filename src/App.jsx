import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import Tutors from "./pages/Tutors";
import Discussions from "./pages/Discussions";
import Resources from "./pages/Resources";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, "", `#${page}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage("dashboard");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      {currentPage !== "dashboard" && (
        <Navbar setCurrentPage={navigate} />
      )}

      {currentPage === "dashboard" && (
        <Dashboard setCurrentPage={navigate} />
      )}

      {currentPage !== "dashboard" && (
        <div className="pt-20">
          {currentPage === "home" && (
            <UserDashboard setCurrentPage={navigate} />
          )}

          {currentPage === "tutors" && <Tutors />}
          {currentPage === "discussions" && <Discussions />}
          {currentPage === "resources" && <Resources />}
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;