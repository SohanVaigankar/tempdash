// components
import PaginatedTable from "../../molecules/paginated-table/PaginatedTable";
// constants, helper fn
import { MOCK_TRANSACTIONS_DATA } from "../../../utils/constants";
interface Transaction {
  id: number;
  name: string;
  order_id: string;
  amount: number;
}

const TransactionsSection = () => {
  const transactionTableHeaders = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "order_id", header: "Order ID", sortable: false },
    { key: "amount", header: "Amount (in $)" },
  ];
  const transactionData: Transaction[] = MOCK_TRANSACTIONS_DATA;

  return (
    <div className="container mx-auto mt-8">
      <PaginatedTable
        data={transactionData}
        columns={transactionTableHeaders}
        itemsPerPage={10}
      />
    </div>
  );
};

export default TransactionsSection;
