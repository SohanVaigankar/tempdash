// components
import { ChartGrid } from "../../molecules/chart-grid";
import { StatsCardGroup } from "../../molecules/stats-card-group";

const OverviewSection = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <select className="w-fit p-2 rounded-md">
        <option value="today">Today</option>
        <option value="today">Last Week</option>
      </select>
      <StatsCardGroup />
      <ChartGrid />
    </div>
  );
};

export default OverviewSection;
