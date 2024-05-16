import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales"],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
];

export const options = {
  curveType: "function",
  series: [{ color: "#E7711B" }],
  legend: "none",
  hAxis: {
    gridlines: {
      color: "transparent",
    },
  },
  vAxis: {
    gridlines: {
      color: "#f1f1f1",
    },
  },
};

const Trends = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-center items-center ml:items-start gap-1 ml:flex-row flex-col">
        <div className="relative flex gap-4 xs:flex-row flex-col">
          <div className="w-48 h-52 rounded-tr-2xl rounded-bl-2xl overflow-hidden relative border border-primary">
            <img
              src="/images/product.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-2">
            <h2 className="font-medium text-2xl mt-2">Organic Tomato</h2>
            <h2 className="text-primary font-medium flex gap-4">
              $25.00 <span className="text-gray-500 line-through">$30.00</span>
            </h2>
          </div>
          <span className="absolute top-0 left-0 px-4 py-1 text-xs text-white bg-primary">
            20% OFF
          </span>
        </div>
        <div className="shadow-2xl md:w-[35rem] w-full">
          <div className="px-4 pt-4">
            <h2 className="font-medium text-sm">Attendence Trend</h2>
            <p className="mb-4 mt-1 text-sm text-gray-400 after:block after:content-[''] after:w-16 after:h-[3px] after:bg-primary">
              Employee Attendence Trend Statics
            </p>
          </div>
          <Chart
            chartType="LineChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Trends;
