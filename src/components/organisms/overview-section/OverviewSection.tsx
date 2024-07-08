// components
import { ChartGrid } from "../../molecules/chart-grid";
import { StatsCardGroup } from "../../molecules/stats-card-group";

const OverviewSection = () => {
  return (
    <div className="flex flex-col flex-grow gap-8 p-5 min-w-[280px]  max-w-[1300px] mx-auto">
      <select className="w-fit p-2 rounded-md bg-inherit ">
        <option value="today">Today</option>
        <option value="today">Last Week</option>
      </select>
      <StatsCardGroup />
      <ChartGrid />
    </div>
  );
};

export default OverviewSection;
