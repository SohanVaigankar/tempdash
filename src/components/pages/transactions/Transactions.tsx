// components
import { TransactionsSection } from "../../organisms/transactions-section";

const Transactions = () => {
  return (
    <div className="h-full  w-full flex flex-col justify-center items-center flex-grow my-auto text-2xl p-2">
      <div>Transactions</div>
      <TransactionsSection />
    </div>
  );
};

export default Transactions;
