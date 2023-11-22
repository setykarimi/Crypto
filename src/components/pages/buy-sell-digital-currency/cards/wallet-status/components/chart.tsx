import ReactEcharts from "echarts-for-react";

export default function MyWalletStatusChart() {
  const option = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
        ],
      },
    ],
  };
  return (
    <div className="grid md:grid-cols-3 gap-2">
      <div>
        <ReactEcharts option={option} />
      </div>
      <div>
        <ReactEcharts option={option} />
      </div>
      <div>
        <ReactEcharts option={option} />
      </div>
    </div>
  );
}
