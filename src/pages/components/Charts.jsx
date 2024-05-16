import Chart from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  [" ", 0, 0, 0],
  ["2016", 460, 1170, 250],
  [" ", 0, 0, 0],
  ["2018", 660, 300, 1120],
  [" ", 0, 0, 0],
  ["2020", 1030, 540, 350],
];

export const options = {
  series: {
    0: { color: "#E7711B", gap: "6rem" }, // Sales
    1: { color: "#ffab91" }, // Profit
    2: { color: "#7e7e7e" }, // Expenses
  },
  legend: { position: "none" }, // Hide legend
};

const Charts = () => {
  return (
    <div className="max-w-[60rem] mt-8 mx-auto shadow-xl px-8 py-4">
      <div className="pt-4 mb-8">
        <h2 className="font-medium text-lg">Leaves Statistics</h2>
        <p className="mb-4 mt-1 text-sm text-gray-400 after:block after:content-[''] after:w-16 after:h-[3px] after:bg-primary">
          Employee Lifetime Leaves Statistics
        </p>
      </div>
      <Chart
        chartType="Bar"
        width="100%"
        height="350px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Charts;
