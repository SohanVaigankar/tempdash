import { useState } from "react";
import { Outlet } from "react-router-dom";
// components
import Sidebar from "../../molecules/sidebar/Sidebar";
import Header from "../../molecules/header/Header";
import { AlertsSection } from "../../organisms/alerts-section";
// icons
import { PiXBold } from "react-icons/pi";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showAlertSection, setShowAlertSection] = useState<boolean>(true);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);
  const handleAlertSectionToggle = () => setShowAlertSection(!showAlertSection);

  return (
    <div className="h-full lg:h-screen">
      <Header
        handleAlertSectionToggle={handleAlertSectionToggle}
        handleSidebarToggle={handleSidebarToggle}
      />
      <div
        className={`relative flex flex-col  w-full lg:hidden h-full  ${
          showSidebar ? "h-[82vh] md:h-[90vh]" : "h-full "
        }`}
      >
        {showSidebar ? (
          <>
            <div className=" z-10 w-full  h-full flex flex-col items-center md:flex-row justify-between pt-14 sm:pt-0 sm:justify-center">
              <div className="absolute bg-gray-300 dark:bg-[#333] rounded-t-lg mt-10  top-0 left-0 h-full w-full z-0"></div>
              <span onClick={handleSidebarToggle}>
                <PiXBold
                  fontSize={"1.5rem"}
                  className="absolute right-3 top-12 hover:cursor-pointer hover:rounded-sm"
                />
              </span>
              <Sidebar />
            </div>
          </>
        ) : (
          <>
            <Outlet />
            {showAlertSection && <AlertsSection />}
          </>
        )}
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
