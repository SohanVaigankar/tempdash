import React from "react";
// components
import Sidebar from "../../molecules/sidebar/Sidebar";
import Header from "../../molecules/header/Header";
import { AlertsSection } from "../../organisms/alerts-section";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Sidebar />
      {children}
      <AlertsSection />
    </div>
  );
};

export default DashboardLayout;
