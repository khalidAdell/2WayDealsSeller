import Chart from "react-google-charts";

export const data = [
  [
    { type: "string", label: "Month" },
    { id: "i0", type: "number", label: "Line 1" },
    { id: "i1", type: "number", label: "Line 2" },
    { id: "i2", type: "number", label: "Line 3" },
  ],
  ["Jan 1", 140, 50, 100],
  ["Feb 5", 50, 100, 140],
  ["Mar 1", 100, 140, 50],
  ["Apr 1", 100, 50, 140],
  ["May 1", 140, 100, 50],
  ["Jun 5", 50, 140, 100],
  ["Jul 1", 100, 50, 140],
  ["Aug 1", 140, 100, 50],
];

export const options = {
  curveType: "function",
  lineWidth: 2,
  intervals: { style: "line" },
  legend: "none",
  hAxis: {
    textColor: "#b3b3b3",
    gridlines: {
      color: "transparent",
    },
  },
  vAxis: {
    textPosition: "none",
    gridlines: {
      color: "#e7e7e7",
    },
  },
  chartArea: {
    width: "100%",
    height: "80%",
  },
  // Difference here only with line intervals
  interval: {
    i0: { style: "line", color: "#020202", lineWidth: 2 },
    i1: { style: "line", color: "#f13a3a", lineWidth: 2 },
    i2: { style: "line", color: "#ffce2e", lineWidth: 2 },
  },
};

const LineChart = () => {
  return (
    <div className="max-w-[60rem] mt-8 mx-auto bg-white">
      <div className="shadow-xl px-8 py-4">
        <div className="pt-4 mb-8">
          <h2 className="font-medium text-lg">Sales, Net, Groose</h2>
          <p className="mb-4 mt-1 text-sm text-gray-400 after:block after:content-[''] after:w-8 after:h-[3px] after:bg-primary">
            6 month rank
          </p>
        </div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="380px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default LineChart;
