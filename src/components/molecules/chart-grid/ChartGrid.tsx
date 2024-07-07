// components
import LineChart from "../../atoms/charts/LineChart";
import BarChart from "../../atoms/charts/BarChart";
import PieChart from "../../atoms/charts/PieChart";
// constants & helper fn
import {
  MOCK_NO_OF_TRANSACTIONS_DATA,
  MOCK_REVENUE_DATA,
  MOCK_TRANSACTION_VALUE_BY_REFERRER_DATA,
  MOCK_TRANSACTION_VOLUME_BY_LOCATION_DATA,
} from "../../../utils/constants";

const ChartGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <LineChart title="Revenue" data={MOCK_REVENUE_DATA} />
      <LineChart
        title="Number of Transactions"
        data={MOCK_NO_OF_TRANSACTIONS_DATA}
      />
      <BarChart
        title="Transaction Value by Referrer (in $)"
        data={MOCK_TRANSACTION_VALUE_BY_REFERRER_DATA}
      />
      <PieChart
        title="% Transaction Volume by Location"
        data={MOCK_TRANSACTION_VOLUME_BY_LOCATION_DATA}
      />
    </div>
  );
};

export default ChartGrid;
