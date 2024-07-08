import {
  ResponsiveContainer,
  BarChart as BarChartContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";

type BarChartDataType = {
  name: string;
  value: number;
};

type BarChartProps = {
  title?: string;
  data: BarChartDataType[];
};

const COLORS = ["#C5FA58", "#526062", "#EF8E5B", "#0B6468"];

const BarChart = (props: BarChartProps) => {
  const { data, title } = props;

  return (
    <div className="rounded-md bg-white pt-4 min-w-[280px]">
      <h3 className="font-semibold text-left mb-1 pl-8 dark:text-neutral-700">
        {title}
      </h3>
      <div className="h-full w-full max-h-[20rem] p-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChartContainer data={data} barSize={24}>
          <CartesianGrid vertical={false} />
            <XAxis
              tickLine={false}
              dataKey="name"
              tickMargin={6}
              fontSize={12}
            />
            <YAxis axisLine={false} tickLine={false} fontSize={12} />
            <Tooltip />
            <Bar fill={"#8884d8"} dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
