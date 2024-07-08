// icons
import { PiTrendDownFill, PiTrendUpFill } from "react-icons/pi";

type DashboardStatsCardProps = {
  changePercentage: number;
  stats: string;
  title: string;
  extraClassName?: string;
};

const DashboardStatsCard = (props: DashboardStatsCardProps) => {
  const { changePercentage, extraClassName, stats, title } = props;
  return (
    <div className={`px-4 py-5 rounded-xl shadow-sm  ${extraClassName}`}>
      <h5 className="text-left font-semibold text-sm">{title}</h5>
      <div className="flex justify-between items-center mt-2">
        <h3 className="font-semibold text-2xl">{stats}</h3>
        <div className="flex justify-center items-center text-[0.8rem]">
          <span>{changePercentage.toFixed(2)}%</span>
          {changePercentage > 0 ? <PiTrendUpFill /> : <PiTrendDownFill />}
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsCard;
