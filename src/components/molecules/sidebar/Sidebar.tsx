import { useState } from "react";
// components
import NavItem from "../../atoms/nav-item/NavItem";
// icons
import {
  PiBarcode,
  PiBasket,
  PiCurrencyCircleDollar,
  PiGear,
  PiIdentificationCardDuotone,
  PiInvoiceDuotone,
  PiNotebook,
  PiRocketLaunch,
  PiUsers,
  PiDotOutlineFill,
  PiFileDoc,
  PiHeadset,
  PiLink,
} from "react-icons/pi";

// assets
import Logo from "../../../assets/svgs/logo.svg";
// styles
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showRecent, setShowRecent] = useState<boolean>(false);

  const handleShowRecentToggle = () => setShowRecent(!showRecent);

  const LINKS = [
    {
      name: "Documentation",
      url: "/",
      icon: <PiFileDoc fontSize={"1.25rem"} />,
    },
    {
      name: "Help Center",
      url: "/",
      icon: <PiHeadset fontSize={"1.25rem"} />,
    },
  ];

  const NAVIGATION_ROUTES = [
    {
      id: "overview",
      icon: <PiRocketLaunch fontSize={"1.25rem"} />,
      name: "Overview",
      path: "/overview",
      subRoutes: null,
    },
    {
      icon: <PiCurrencyCircleDollar fontSize={"1.25rem"} />,
      name: "Transactions",
      path: "/transactions",
      id: "transactions",
      subRoutes: null,
    },
    {
      icon: <PiInvoiceDuotone fontSize={"1.25rem"} />,
      name: "Invoices",
      path: "/invoices",
      id: "invoices",
      subRoutes: null,
    },
    {
      icon: <PiUsers fontSize={"1.25rem"} />,
      name: "Customers",
      path: "/customers",
      id: "customers",
      subRoutes: null,
    },
    {
      icon: <PiBarcode fontSize={"1.25rem"} />,
      name: "Product Catalog",
      path: "/product-catalog",
      id: "product-catalog",
      subRoutes: [
        {
          name: "Overview",
          path: "/overview",
          id: "overview",
          subRoutes: null,
        },
        {
          name: "Products",
          path: "/products",
          id: "products",
          subRoutes: null,
        },
        {
          name: "Discounts",
          path: "/discounts",
          id: "discounts",
          subRoutes: null,
        },
        {
          name: "Taxable Items",
          path: "/taxable-items",
          id: "taxable-items",
          subRoutes: null,
        },
      ],
    },
    {
      icon: <PiIdentificationCardDuotone fontSize={"1.25rem"} />,
      name: "Reports",
      path: "/reports",
      id: "reports",
      subRoutes: null,
    },
    {
      icon: <PiBasket fontSize={"1.25rem"} />,
      name: "Checkout",
      path: "/checkout",
      id: "checkout",
      subRoutes: null,
    },
    {
      icon: <PiNotebook fontSize={"1.25rem"} />,
      name: "Business Accoount",
      path: "/business-account",
      id: "business-account",
      subRoutes: null,
    },
    {
      icon: <PiGear fontSize={"1.25rem"} />,
      name: "Developer Tools",
      path: "/developer-tools",
      id: "developer-tools",
      subRoutes: null,
    },
  ];

  return (
    <nav className="flex flex-col gap-4  min-w-[220px] md:max-w-[240px] p-5 overflow-y-auto">
      {/* favourites & recent */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3
            onClick={handleShowRecentToggle}
            className={`hover:cursor-pointer hover:text-black dark:hover:text-white ${
              showRecent ? "text-gray-400" : "text-black dark:text-white"
            }`}
          >
            Favourites
          </h3>
          <h3
            onClick={handleShowRecentToggle}
            className={`hover:cursor-pointer hover:text-black dark:hover:text-white ${
              showRecent ? "text-black dark:text-white" : "text-gray-400"
            }`}
          >
            Recent
          </h3>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center justify-start gap-1 hover:cursor-pointer py-[0.15rem] hover:text-black  hover:bg-gray-200 rounded-md">
              <PiDotOutlineFill
                className="text-gray-400"
                fontSize={"1.25rem"}
              />
              <span>Get Started</span>
            </li>
            <li className="flex items-center justify-start gap-1 hover:cursor-pointer py-[0.15rem] hover:text-black  hover:bg-gray-200 rounded-md">
              <PiDotOutlineFill
                className="text-gray-400"
                fontSize={"1.25rem"}
              />
              <span>Transactions</span>
            </li>
          </ul>
        </div>
      </div>
      {/* pages */}
      <div>
        <h3 className="text-gray-400 mb-2">Pages</h3>
        <div className="flex flex-col gap-1">
          {NAVIGATION_ROUTES.map((navItem) => (
            <NavItem key={navItem.id} {...navItem} />
          ))}
        </div>
      </div>
      {/* docs & support */}
      <div>
        <h3 className="pl-4 text-gray-400 mb-2">Links</h3>
        <ul className="flex flex-col gap-1">
          {LINKS.map((link, index) => (
            <li
              key={`link-${index}`}
              className="flex items-center justify-start gap-1 hover:cursor-pointer py-[0.15rem] hover:text-black  hover:bg-gray-200 rounded-md  pl-2"
            >
              <PiLink fontSize={"1.25rem"} className="text-gray-400" />
              {link.icon}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* logo */}
      <Link
        to={"/"}
        className="lg:my-auto lg:mb-0 bg-transparent dark:bg-white/80 dark:rounded-md"
      >
        <img src={Logo} alt="logo" className="sm:mx-auto p-2" />
      </Link>
    </nav>
  );
};

export default Sidebar;
