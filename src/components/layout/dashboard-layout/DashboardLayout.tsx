import React, { useState } from "react";
// components
import Sidebar from "../../molecules/sidebar/Sidebar";
import Header from "../../molecules/header/Header";
import { AlertsSection } from "../../organisms/alerts-section";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children } = props;

  const [showAlertSection, setShowAlertSection] = useState<boolean>(true);

  const handleAlertSectionToggle = () => setShowAlertSection(!showAlertSection);

  return (
    <div>
      <Header handleAlertSectionToggle={handleAlertSectionToggle} />
      <div className="flex  w-full">
        <Sidebar />
        {children}
        {showAlertSection && <AlertsSection />}
      </div>
    </div>
  );
};

export default DashboardLayout;
