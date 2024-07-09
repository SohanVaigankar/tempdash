import { useMemo, useState } from "react";
// components
import SearchBar from "../../atoms/search-bar/SearchBar";
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

  const [query, setQuery] = useState<string>("");

  const transactionData: Transaction[] = MOCK_TRANSACTIONS_DATA;

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  // filtering out transaction data based on search query
  const filteredTransactionData = useMemo(() => {
    const filteredList = transactionData.filter(
      (item) =>
        String(item.id).includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.order_id.toLowerCase().includes(query) ||
        String(item.amount).includes(query)
    );
    return filteredList;
  }, [query, transactionData]);

  return (
    <div className="container flex flex-col gap-6 mx-auto mt-8 lg:mt-8">
      <div className="flex flex-col gap-6 xl:flex-row justify-between items-center w-full">
        <div>Recent Transactions</div>
        <SearchBar
          extraClassName="max-w-[600px] w-full"
          handleChange={handleSearch}
        />
      </div>
      <PaginatedTable
        data={filteredTransactionData}
        columns={transactionTableHeaders}
        itemsPerPage={10}
      />
    </div>
  );
};

export default TransactionsSection;
