import { useState } from "react";
import { Outlet } from "react-router-dom";
// components
import Sidebar from "../../molecules/sidebar/Sidebar";
import Header from "../../molecules/header/Header";
import { AlertsSection } from "../../organisms/alerts-section";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showAlertSection, setShowAlertSection] = useState<boolean>(true);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);
  const handleAlertSectionToggle = () => setShowAlertSection(!showAlertSection);

  return (
    <div className="h-screen">
      <Header
        handleAlertSectionToggle={handleAlertSectionToggle}
        handleSidebarToggle={handleSidebarToggle}
      />
      <div className="flex w-full h-full" style={{ maxHeight: "calc(92vh)" }}>
        {showSidebar && <Sidebar />}
        <Outlet />
        {showAlertSection && <AlertsSection />}
      </div>
    </div>
  );
};

export default DashboardLayout;
