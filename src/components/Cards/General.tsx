"use client";
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({data}:{data: any[]}) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default function General() {
  const data = [
    {
      id: "japan",
      color: "hsl(122, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 47,
        },
        {
          x: "helicopter",
          y: 50,
        },
        {
          x: "boat",
          y: 174,
        },
        {
          x: "train",
          y: 286,
        },
        {
          x: "subway",
          y: 45,
        },
        {
          x: "bus",
          y: 284,
        },
        {
          x: "car",
          y: 269,
        },
        {
          x: "moto",
          y: 287,
        },
        {
          x: "bicycle",
          y: 208,
        },
        {
          x: "horse",
          y: 53,
        },
        {
          x: "skateboard",
          y: 95,
        },
        {
          x: "others",
          y: 210,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(286, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 90,
        },
        {
          x: "helicopter",
          y: 129,
        },
        {
          x: "boat",
          y: 164,
        },
        {
          x: "train",
          y: 253,
        },
        {
          x: "subway",
          y: 128,
        },
        {
          x: "bus",
          y: 102,
        },
        {
          x: "car",
          y: 40,
        },
        {
          x: "moto",
          y: 150,
        },
        {
          x: "bicycle",
          y: 117,
        },
        {
          x: "horse",
          y: 236,
        },
        {
          x: "skateboard",
          y: 271,
        },
        {
          x: "others",
          y: 162,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(210, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 82,
        },
        {
          x: "helicopter",
          y: 57,
        },
        {
          x: "boat",
          y: 24,
        },
        {
          x: "train",
          y: 216,
        },
        {
          x: "subway",
          y: 158,
        },
        {
          x: "bus",
          y: 147,
        },
        {
          x: "car",
          y: 258,
        },
        {
          x: "moto",
          y: 204,
        },
        {
          x: "bicycle",
          y: 107,
        },
        {
          x: "horse",
          y: 122,
        },
        {
          x: "skateboard",
          y: 6,
        },
        {
          x: "others",
          y: 69,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(245, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 129,
        },
        {
          x: "helicopter",
          y: 189,
        },
        {
          x: "boat",
          y: 133,
        },
        {
          x: "train",
          y: 147,
        },
        {
          x: "subway",
          y: 84,
        },
        {
          x: "bus",
          y: 115,
        },
        {
          x: "car",
          y: 60,
        },
        {
          x: "moto",
          y: 254,
        },
        {
          x: "bicycle",
          y: 131,
        },
        {
          x: "horse",
          y: 228,
        },
        {
          x: "skateboard",
          y: 161,
        },
        {
          x: "others",
          y: 61,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(162, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 191,
        },
        {
          x: "helicopter",
          y: 56,
        },
        {
          x: "boat",
          y: 171,
        },
        {
          x: "train",
          y: 6,
        },
        {
          x: "subway",
          y: 220,
        },
        {
          x: "bus",
          y: 148,
        },
        {
          x: "car",
          y: 140,
        },
        {
          x: "moto",
          y: 3,
        },
        {
          x: "bicycle",
          y: 6,
        },
        {
          x: "horse",
          y: 87,
        },
        {
          x: "skateboard",
          y: 46,
        },
        {
          x: "others",
          y: 167,
        },
      ],
    },
  ];
  return (
    <div className="w-full h-[500px]">
      <MyResponsiveLine data={data} />
    </div>
  );
}
