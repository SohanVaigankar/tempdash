import "./App.css";
// components
import {
  Overview,
  Transactions,
  Invoices,
  Customers,
  ProductCatalog,
  Reports,
  Checkout,
  BusinessAccount,
  DeveloperTools,
} from "./components/pages";

function App() {
  return (
    <>
      <Overview />
      <Transactions />
      <Invoices />
      <Customers />
      <ProductCatalog />
      <Reports />
      <Checkout />
      <BusinessAccount />
      <DeveloperTools />
    </>
  );
}

export default App;
