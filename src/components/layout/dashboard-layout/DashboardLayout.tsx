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
    <div className="h-full md:h-screen">
      <Header
        handleAlertSectionToggle={handleAlertSectionToggle}
        handleSidebarToggle={handleSidebarToggle}
      />
      <div className="flex flex-col  w-full lg:hidden">
        <div className="flex flex-col sm:flex-row justify-between">
          {showSidebar && <Sidebar />}
          <Outlet />
        </div>
        {showAlertSection && <AlertsSection />}
      </div>

      <div
        className="hidden lg:flex  w-full lg:h-full "
        style={{ maxHeight: "calc(92vh)" }}
      >
        {showSidebar && <Sidebar />}
        <Outlet />
        {showAlertSection && <AlertsSection />}
      </div>
    </div>
  );
};

export default DashboardLayout;
