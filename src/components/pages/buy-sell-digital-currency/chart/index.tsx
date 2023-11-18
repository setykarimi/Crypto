import { useCoins } from "@hooks/useCoins";
import ReactEcharts from "echarts-for-react";

export default function LinearChart() {
  const {
    data: coins,
    error,
    isLoading,
  } = useCoins(`/coins/bitcoin/charts?period=24h
    `);
  console.log(coins);

  let option;
  const upColor = "#ec0000";
  const upBorderColor = "#8A0000";
  const downColor = "#00da3c";
  const downBorderColor = "#008F28";

  const data0 = splitData([
    ["2013/1/1", 2320.26, 2320.26, 2287.3, 2362.94],
    ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
    ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
    ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],
    ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],
    ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],
    ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
    ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
    ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],
    ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
    ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
    ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
    ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
    ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
    ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
    ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
    ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
    ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
  ]);

  [
    ["2013/1/1", 36479.9288, 1, 18.7542],
    ["2013/1/25", 36413.4986, 1, 18.7516],
    ["2013/1/28", 36494.3628, 1, 18.7728],
    ["2013/1/29", 36425.4981, 1, 18.7622],
    ["2013/1/30", 36395.2515, 1, 18.7558],
    ["2013/1/31", 36419.3639, 1, 18.7403],
    ["2013/2/1", 36424.9779, 1, 18.7644],
    ["2013/2/4", 36466.3313, 1, 18.7472],
    ["2013/2/5", 36431.337, 1, 18.744],
    ["2013/2/6", 36394.7603, 1, 18.7514],
    ["2013/2/7", 36443.0502, 1, 18.745],
    ["2013/2/8", 36474.9254, 1, 18.7491],
    ["2013/2/18", 36474.0303, 1, 18.7419],
    ["2013/2/19", 36463.638, 1, 18.7491],
    ["2013/2/20", 36507.6078, 1, 18.7622],
    ["2013/2/21", 36433.6944, 1, 18.7407],
    ["2013/2/22", 36425.449, 1, 18.7627],
  ];

  function splitData(rawData: any) {
    const categoryData = [];
    const values = [];
    for (var i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].splice(0, 1)[0]);
      values.push(rawData[i]);
    }
    return {
      categoryData: categoryData,
      values: values,
    };
  }

  function calculateMA(dayCount: any) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
      if (i < dayCount) {
        result.push("-");
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
        sum += +data0.values[i - j][1];
      }
      result.push(sum / dayCount);
    }
    return result;
  }

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    // grid: {
    //   left: "10%",
    //   right: "10%",
    //   bottom: "15%",
    // },
    xAxis: {
      type: "category",
      data: data0.categoryData,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true,
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 50,
        end: 100,
      },
      {
        show: true,
        type: "slider",
        top: "90%",
        start: 50,
        end: 100,
      },
    ],
    series: [
      {
        name: "日K",
        type: "candlestick",
        data: data0.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor,
        },
        markPoint: {
          // label: {
          //   formatter: function (param: any) {
          //     return param != null ? Math.round(param.value) + "" : "";
          //   },
          // },
          // data: [
          //   {
          //     name: "Mark",
          //     coord: ["2013/5/31", 2300],
          //     value: 2300,
          //     itemStyle: {
          //       color: "rgb(41,60,85)",
          //     },
          //   },
          //   {
          //     name: "highest value",
          //     type: "max",
          //     valueDim: "highest",
          //   },
          //   {
          //     name: "lowest value",
          //     type: "min",
          //     valueDim: "lowest",
          //   },
          //   {
          //     name: "average value on close",
          //     type: "average",
          //     valueDim: "close",
          //   },
          // ],
          tooltip: {
            formatter: function (param: any) {
              return param.name + "<br>" + (param.data.coord || "");
            },
          },
        },
        markLine: {
          symbol: ["none", "none"],
          data: [
            [
              {
                name: "from lowest to highest",
                type: "min",
                valueDim: "lowest",
                symbol: "circle",
                symbolSize: 10,
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
              },
              {
                type: "max",
                valueDim: "highest",
                symbol: "circle",
                symbolSize: 10,
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
              },
            ],
            {
              name: "min line on close",
              type: "min",
              valueDim: "close",
            },
            {
              name: "max line on close",
              type: "max",
              valueDim: "close",
            },
          ],
        },
      },
      {
        name: "MA5",
        type: "line",
        data: calculateMA(5),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "MA10",
        type: "line",
        data: calculateMA(10),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "MA20",
        type: "line",
        data: calculateMA(20),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "MA30",
        type: "line",
        data: calculateMA(30),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
    ],
  };

  return <ReactEcharts option={option} />;
}
