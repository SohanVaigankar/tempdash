// components
import DashboardStatsCard from "../../atoms/dashboard-stats-card/DashboardStatsCard";
// utils, constants & helper fns
import { MOCK_DASHBOARD_STATS } from "../../../utils/constants";

const StatsCardGroup = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 sm:gap-6">
      <DashboardStatsCard
        changePercentage={MOCK_DASHBOARD_STATS.TODAY.revenue.change}
        stats={MOCK_DASHBOARD_STATS.TODAY.revenue.result}
        title="Revenue"
        extraClassName="bg-[#DBE6F2] text-[#1C1C1C]"
      />
      <DashboardStatsCard
        changePercentage={MOCK_DASHBOARD_STATS.TODAY.transactions.change}
        stats={MOCK_DASHBOARD_STATS.TODAY.transactions.result}
        title="Transactions"
        extraClassName="bg-[#F9FEF0] text-[#1C1C1C]"
      />
      <DashboardStatsCard
        changePercentage={MOCK_DASHBOARD_STATS.TODAY.avgTransactions.change}
        stats={MOCK_DASHBOARD_STATS.TODAY.avgTransactions.result}
        title="Average transaction"
        extraClassName="bg-[#DBE6F2] text-[#1C1C1C]"
      />
      <DashboardStatsCard
        changePercentage={MOCK_DASHBOARD_STATS.TODAY.refunds.change}
        stats={MOCK_DASHBOARD_STATS.TODAY.refunds.result}
        title="Refunds"
        extraClassName="bg-[#F9FEF0] text-[#1C1C1C]"
      />
    </div>
  );
};

export default StatsCardGroup;
