import React from "react";
import CalculatorCard from "./CalculatorCard";
import SalaryCard from "./SalaryCard";

function Dashboard() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-between gap-6">
        <CalculatorCard />
        <SalaryCard />
      </div>
    </div>
  );
}

export default Dashboard;
