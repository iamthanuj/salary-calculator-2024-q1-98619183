import React from "react";

const SalaryCard = () => {
  return (
    <div className="font-inter bg-bg-main p-6 border border-bg-secondary rounded-lg w-[480px]">
      <h3 className="text-xl font-bold">Calculate Your Salary</h3>
      <div className="mt-6">
        {/* Head title */}
        <div className="flex justify-between">
          <p className="text-[14px] font-semibold text-text-secondary">Items</p>
          <p className="text-[14px] font-semibold text-text-secondary">
            Amount
          </p>
        </div>

        {/* Total details */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between ">
            <p>Basic Salary</p>
            <p>150,000.00</p>
          </div>

          <div className="flex justify-between ">
            <p>Gross Earning</p>
            <p>160,000.00</p>
          </div>

          <div className="flex justify-between ">
            <p>Gross Deduction</p>
            <p>- 8,000.00</p>
          </div>

          <div className="flex justify-between ">
            <p>Employee EPF (8%)</p>
            <p>- 12,160.00</p>
          </div>

          <div className="flex justify-between ">
            <p>APIT</p>
            <p>- 3,740.00</p>
          </div>
        </div>

        {/* net salary */}
        <div>
          <div className="flex justify-between border border-bg-secondary rounded-[4px] p-4 mt-6">
            <p className="font-semibold">Net Salary (Take Home)</p>
            <p className="font-semibold">136,100.00</p>
          </div>
        </div>

        {/* contribuiton part */}
        <div className="mt-6">
          <p className="text-[14px] font-semibold text-text-secondary">
            Contribution from the Employer
          </p>
          <div className="flex justify-between mt-3 ">
            <p>Employeer EPF (12%)</p>
            <p>18,240.00</p>
          </div>

          <div className="flex justify-between mt-2">
            <p>Employeer ETF (3%)</p>
            <p>4,560.00</p>
          </div>

          <div className="flex justify-between mt-8">
            <p>CTC (Cost to Company)</p>
            <p>174,800.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCard;
