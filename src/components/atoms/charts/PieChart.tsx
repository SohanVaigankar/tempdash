import {
  PieChart as PieChartContainer,
  ResponsiveContainer,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#C5FA58", "#526062", "#EF8E5B", "#0B6468"];

type PieChartDataType = {
  name: string;
  value: number;
};

type PieChartProps = {
  data: PieChartDataType[];
  title?: string;
};

const PieChart = (props: PieChartProps) => {
  const { data, title } = props;

  return (
    <div className="rounded-md bg-white pt-4 min-w-[280px]">
      {title && (
        <h3 className="font-semibold text-left mb-1 pl-8 dark:text-neutral-700">
          {title}
        </h3>
      )}
      <div className="h-full w-full max-h-[20rem] ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChartContainer>
            <Legend layout="vertical" align="right" verticalAlign="middle" />
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
              cornerRadius={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;
