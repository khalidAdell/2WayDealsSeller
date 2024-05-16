import CalendarTable from "../components/CalendarTable";
import Charts from "../components/Charts";
import Landing from "../components/Landing";
import TopSales from "../components/TopSales";
import Trends from "../components/Trends";

const HomePage = () => {
  return (
    <div className="">
      <Landing />
      <TopSales bg={true} />
      <Trends />
      <Charts />
      <CalendarTable />
    </div>
  );
};

export default HomePage;
