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
    <div className="w-full">
      <Overview />
      <Transactions />
      <Invoices />
      <Customers />
      <ProductCatalog />
      <Reports />
      <Checkout />
      <BusinessAccount />
      <DeveloperTools />
    </div>
  );
}

export default App;
