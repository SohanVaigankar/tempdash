// images
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import user5 from "../assets/images/user5.png";

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
} from "react-icons/pi";

export enum NOTIFICATION_TYPES {
  ISSUE = "ISSUE",
  NEW_MEMBER = "NEW_MEMBER",
  NEW_FEATURE = "NEW_FEATURE",
  NEW_SUBSCRIBER = "NEW_SUBSCRIBER",
}

export const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    message: "You have a new issue that needs to be resolved",
    timeStamp: Date(),
    type: "ISSUE",
  },
  {
    id: 2,
    message: "New team member joined",
    timeStamp: Date(),
    type: "NEW_MEMBER",
  },
  {
    id: 3,
    message: "New product feature available",
    timeStamp: Date(),
    type: "NEW_FEATURE",
  },
  {
    id: 4,
    message: "Andi Lane subscribed to you",
    timeStamp: Date(),
    type: "NEW_SUBSCRIBER",
  },
];

export const MOCK_ACTIVITIES = [
  {
    id: 1,
    message: "Discount details updated",
    timeStamp: Date(),
    picture: user1,
  },
  {
    id: 2,
    message: "Aman added a new product",
    timeStamp: Date(),
    picture: user2,
  },
  {
    id: 3,
    message: "Refunds cleared",
    timeStamp: Date(),
    picture: user3,
  },
  {
    id: 4,
    message: "Tax report download complete",
    timeStamp: Date(),
    picture: user4,
  },
  {
    id: 5,
    message: "Product details updated",
    timeStamp: Date(),
    picture: user5,
  },
];

export const ROUTES = {
  OVERVIEW: {
    icon: PiRocketLaunch,
    name: "Overview",
    path: "/overview",
    subRoutes: null,
  },
  TRANSACTIONS: {
    icon: PiCurrencyCircleDollar,
    name: "Transactions",
    path: "/transactions",
    subRoutes: null,
  },
  INVOICES: {
    icon: PiInvoiceDuotone,
    name: "Invoices",
    path: "/invoices",
    subRoutes: null,
  },
  CUSTOMERS: {
    icon: PiUsers,
    name: "Customers",
    path: "/customers",
    subRoutes: null,
  },
  PRODUCT_CATALOG: {
    icon: PiBarcode,
    name: "Product Catalog",
    path: "/product-catalog",
    subRoutes: {
      PRODUCT_CATALOG_OVERVIEW: {
        name: "Overview",
        path: "/overview",
        subRoutes: null,
      },
      PRODUCTS: {
        name: "Products",
        path: "/products",
        subRoutes: null,
      },
      DISCOUNTS: {
        name: "Discounts",
        path: "/discounts",
        subRoutes: null,
      },
      TAXABLE_ITEMS: {
        name: "Taxable Items",
        path: "/taxable-items",
        subRoutes: null,
      },
    },
  },
  REPORTS: {
    icon: PiIdentificationCardDuotone,
    name: "Reports",
    path: "/reports",
    subRoutes: null,
  },
  CHECKOUT: {
    icon: PiBasket,
    name: "Checkout",
    path: "/checkout",
    subRoutes: null,
  },
  BUSINESS_ACCOUNT: {
    icon: PiNotebook,
    name: "Business Accoount",
    path: "/business-account",
    subRoutes: null,
  },
  DEVELOPER_TOOLS: {
    icon: PiGear,
    name: "Developer Tools",
    path: "/developer-tools",
    subRoutes: null,
  },
  SETTINGS: {
    icon: PiGear,
    name: "Settings",
    path: "/settings",
    subRoutes: null,
  },
};

export const MOCK_DASHBOARD_STATS = {
  TODAY: {
    revenue: {
      result: "$24M",
      change: 11.01,
    },
    transactions: {
      result: "14K",
      change: -0.03,
    },
    avgTransactions: {
      result: "$2K",
      change: 15.03,
    },
    refunds: {
      result: "1K",
      change: 6.08,
    },
  },
};

export const MOCK_TRANSACTION_VOLUME_BY_LOCATION_DATA = [
  { name: "United States", value: 38.6 },
  { name: "Other", value: 8.1 },
  { name: "Europe", value: 30.8 },
  { name: "Canada", value: 22.5 },
];

export const MOCK_TRANSACTION_VALUE_BY_REFERRER_DATA = [
  { name: "YouTube", value: 200000 },
  { name: "Twitter", value: 235000 },
  { name: "Reddit", value: 205000 },
  { name: "Indiehacker", value: 100000 },
];

export const MOCK_NO_OF_TRANSACTIONS_DATA = [
  { name: "Jan", value: 10000 },
  { name: "Feb", value: 12000 },
  { name: "Mar", value: 13000 },
  { name: "Apr", value: 12500 },
  { name: "May", value: 14000 },
  { name: "Jun", value: 20000 },
  { name: "Jul", value: 21000 },
];

export const MOCK_REVENUE_DATA = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 130 },
  { name: "Apr", value: 125 },
  { name: "May", value: 140 },
  { name: "Jun", value: 200 },
  { name: "Jul", value: 210 },
];
