// images
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import user5 from "../assets/images/user5.png";



export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

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
    timeStamp: new Date(),
    type: "ISSUE",
  },
  {
    id: 2,
    message: "New team member joined",
    timeStamp: new Date().setDate(new Date().getDate() - 3),
    type: "NEW_MEMBER",
  },
  {
    id: 3,
    message: "New product feature available",
    timeStamp: new Date().setDate(new Date().getDate() - 15),
    type: "NEW_FEATURE",
  },
  {
    id: 4,
    message: "Andi Lane subscribed to you",
    timeStamp: new Date().setMonth(new Date().getMonth() - 3),
    type: "NEW_SUBSCRIBER",
  },
];

export const MOCK_ACTIVITIES = [
  {
    id: 1,
    message: "Discount details updated",
    timeStamp: new Date(),
    picture: user1,
  },
  {
    id: 2,
    message: "Aman added a new product",
    timeStamp: new Date(),
    picture: user2,
  },
  {
    id: 3,
    message: "Refunds cleared",
    timeStamp: new Date().setDate(new Date().getDate() - 1),
    picture: user3,
  },
  {
    id: 4,
    message: "Tax report download complete",
    timeStamp: new Date().setDate(new Date().getDate() - 9),
    picture: user4,
  },
  {
    id: 5,
    message: "Product details updated",
    timeStamp: new Date().setMonth(new Date().getMonth() - 2),
    picture: user5,
  },
];

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

export const MOCK_TRANSACTIONS_DATA = [
  { id: 1, name: "Bruce Wayne", order_id: "ODR-989892-ED", amount: 300 },
  { id: 2, name: "Tony Stark", order_id: "ODR-985892-ED", amount: 25 },
  { id: 3, name: "Bruce Banner", order_id: "ODR-929892-ED", amount: 305 },
  { id: 4, name: "Clint Barton", order_id: "ODR-989894-ED", amount: 230 },
  { id: 5, name: "Peter Parker", order_id: "ODR-989892-ED", amount: 2225 },
  { id: 6, name: "Thor Odinson", order_id: "ODR-989891-ED", amount: 315 },
  { id: 7, name: "Scott Lang", order_id: "ODR-988892-ED", amount: 30 },
  { id: 8, name: "Bucky Barnes", order_id: "ODR-981192-ED", amount: 2205 },
  { id: 9, name: "Steve Rogers", order_id: "ODR-989897-ED", amount: 35 },
  { id: 10, name: "Natasha Romanoff", order_id: "ODR-789892-ED", amount: 3000 },
  { id: 11, name: "Harry Osborn", order_id: "ODR-289892-ED", amount: 225 },
  { id: 12, name: "Gwen Stacy", order_id: "ODR-189892-ED", amount: 9 },
]