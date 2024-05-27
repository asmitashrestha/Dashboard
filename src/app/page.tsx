"use client";

import General from "@/components/Cards/General";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Blocks, CircleDashed, HandCoins } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-[32px]">
      <General />
      <div className="grid gap-[32px]">
        <Card >
          <Progress value={55} className="flex relative top-20 mx-5 justify-center text-center "/>
        </Card>
        <Card>
          <Progress value={70}  className="flex relative top-20 mx-5 justify-center text-center "/>
        </Card>
      </div>
      <div className="grid grid-cols-3 col-span-2 w-full gap-[32px] pb-5">
        <Card className="h-[150px] bg-yellow-700 hover:bg-yellow-600">
          <div className="px-2 pt-2 flex ">
            <Blocks className="w-[30px] h-[30px] text-white" />
            <CardHeader
              className="relative bottom-5 right-4 text-[18px]
             text-white"
            >
              Earning
            </CardHeader>
          </div>
          <div className="ml-5 relative bottom-3">
            <CardDescription className="text-xl text-white">
              {" "}
              +94.5K
            </CardDescription>
          </div>
        </Card>
        <Card className="h-[150px] bg-red-700 hover:bg-red-600">
          <div className="px-2 pt-2 flex ">
            <CircleDashed className="w-[30px] h-[30px] text-white" />
            <CardHeader
              className="relative bottom-5 right-4 text-[18px]
             text-white"
            >
              Spending
            </CardHeader>
          </div>
          <div className="ml-5 relative bottom-3">
            <CardDescription className="text-xl text-white">
              {" "}
              +30.5K
            </CardDescription>
          </div>
        </Card>
        <Card className="h-[150px] bg-blue-700 hover:bg-blue-600">
          <div className="px-2 pt-2 flex ">
            <HandCoins className="w-[30px] h-[30px] text-white" />
            <CardHeader
              className="relative bottom-5 right-4 text-[18px]
             text-white"
            >
              Saving
            </CardHeader>
          </div>
          <div className="ml-5 relative bottom-3">
            <CardDescription className="text-xl text-white">
              {" "}
              +44.5K
            </CardDescription>
          </div>
        </Card>
      </div>
    </div>
  );
}
