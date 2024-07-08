import {
  ResponsiveContainer,
  LineChart as LineChartContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type LineChartDataType = {
  name: string;
  value: number;
};

type LineChartProps = {
  title?: string;
  data: LineChartDataType[];
};

const LineChart = (props: LineChartProps) => {
  const { data, title } = props;
  return (
    <div className="rounded-md bg-white pt-4 min-w-[280px]">
      <h3 className="font-semibold text-left mb-1 pl-8 dark:text-neutral-700">
        {title}
      </h3>
      <div className="h-full w-full max-h-[20rem] p-3 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChartContainer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              tickLine={false}
              dataKey="name"
              tickMargin={6}
              fontSize={12}
            />
            <YAxis axisLine={false} tickLine={false} fontSize={12} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
