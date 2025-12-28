import ReactEcharts from "echarts-for-react";
import { useMemo } from "react";
import LinearChartSkeleton from "./skeleton";

export default function LinearChart({
  coins,
  isLoading,
}: {
  coins:  number[][];
  isLoading: boolean;
}) {
  const chartData = useMemo(() => {
    if (!coins || coins.length === 0) return [];

    return coins.slice(0, 50).map((item: any) => {
      const timestamp =
        item[0].toString().length === 10 ? item[0] * 1000 : item[0];

      return [timestamp, item[1]];
    });
  }, [coins]);

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
        extraCssText: "direction: rtl; text-align: right;",
        textStyle: {
          fontFamily: "YekanBakh",
        },
        formatter: (params: any[]) => {
          const item = params[0];

          return `
          <div style="font-family: YekanBakh; direction: rtl; text-align: right;">
            <div style="margin-bottom: 4px">
              <strong>${item.seriesName}</strong>
            </div>
            <div>
              ${item.value[1].toLocaleString("fa-IR")} تومان
            </div>
          </div>
        `;
        },
      },

      grid: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        containLabel: true,
      },

      xAxis: {
        type: "time",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          fontFamily: "YekanBakh",
        },
        splitLine: { show: false },
      },

      yAxis: {
        scale: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          fontFamily: "YekanBakh",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            opacity: 0.3,
          },
        },
      },

      series: [
        {
          name: "قیمت بیت‌کوین",
          type: "line",
          data: chartData,
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 2,
            color: "#f7931a", // Bitcoin orange
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(247,147,26,0.4)" },
                { offset: 1, color: "rgba(247,147,26,0)" },
              ],
            },
          },
        },
      ],
    }),
    [chartData]
  );

  if (isLoading) return <LinearChartSkeleton />;

  return <ReactEcharts option={option} />;
}
