import React from "react";
import CalculatorCard from "./CalculatorCard";
import SalaryCard from "./SalaryCard";

function Dashboard() {
  return (
    <div className="xl:h-screen flex justify-center mt-[80px] mb-[80px] xl:my-0 xl:items-center">
      <div className="flex flex-col  xl:flex-row xl:justify-between gap-6">
        <CalculatorCard />
        <SalaryCard />
      </div>
    </div>
  );
}

export default Dashboard;
