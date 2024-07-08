// components
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Overview,
  Transactions,
  Invoices,
  Customers,
  Products,
  ProductDiscounts,
  ProductTaxableItems,
  ProductOverview,
  Reports,
  Checkout,
  BusinessAccount,
  DeveloperTools,
  Settings,
  NotFound,
} from "./components/pages";
// layout
import { DashboardLayout } from "./components/layout/dashboard-layout";
import { FullScreenLayout } from "./components/layout/fullscreen-layout";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to={"/overview"} />} />
          <Route path="overview" element={<Overview />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="customers" element={<Customers />} />
          <Route path="product-catalog">
            <Route index path="overview" element={<ProductOverview />} />
            <Route path="products" element={<Products />} />
            <Route path="discounts" element={<ProductDiscounts />} />
            <Route path="taxable-items" element={<ProductTaxableItems />} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="business-account" element={<BusinessAccount />} />
          <Route path="developer-tools" element={<DeveloperTools />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route element={<FullScreenLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
