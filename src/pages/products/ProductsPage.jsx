import CalendarTable from "../components/CalendarTable";
import Charts from "../components/Charts";
import TopSales from "../components/TopSales";
import Trends from "../components/Trends";
const ProductsPage = () => {
  return (
    <div className="">
      <TopSales />
      <div className="border border-primary px-4 py-6 rounded-tr-2xl rounded-bl-2xl w-fit mx-auto my-4">
        <Trends />
        <Charts />
      </div>
      <CalendarTable />
    </div>
  );
};

export default ProductsPage;
