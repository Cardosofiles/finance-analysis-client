import { ChartAreaInteractive } from "@/components/area-interactive-chart";
import { BarHorizontalChart } from "@/components/bar-horizontal-chart";
import { LineMultipleChart } from "@/components/line-multiple-chart";
import { PizzaChart } from "@/components/pizza-chart";
import { SectionCards } from "@/components/section-cards";
import { ToooltipChart } from "@/components/tooltip-chart";

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <div className="px-6 grid grid-cols-1 lg:grid-cols-4 gap-7">
            <PizzaChart />
            <LineMultipleChart />
            <ToooltipChart />
            <BarHorizontalChart />
          </div>
        </div>
      </div>
    </div>
  );
}
