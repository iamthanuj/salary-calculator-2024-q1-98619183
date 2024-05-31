"use client";
import React from "react";
import Image from "next/image";

function CalculatorCard() {


    

    return (
    <div className="font-inter bg-bg-main w-[680px] p-6 border border-bg-secondary rounded-lg">
      <div className="flex justify-between items-center ">
        <h3 className="text-xl font-bold">Calculate Your Salary</h3>
        <button className="flex gap-1">
          <Image
            src="/images/icon-color.svg"
            alt="reset-icon"
            width={21}
            height={18}
          />
          <span className="text-secondary-color font-medium text-[14px]">
            Reset
          </span>
        </button>
      </div>

      {/* basic salary */}
      <div className="mt-6">
        <p className="font-semibold">Basic Salary</p>
        <input
          className="bg-white w-[356px] py-3 px-[15px] mt-2 rounded outline-none border border-bg-secondary"
          type="text"
          placeholder="150,000.00"
        />
      </div>

      {/* Earnings */}
      <div className="mt-6">
        <p className="font-semibold">Earnings</p>
        <p className="text-[12px] text-text-secondary mt-1">
          Allowance, Fixed Allowance, Bonus and etc.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <input
            className="bg-white w-[212px]  py-3 px-[15px] rounded outline-none border border-bg-secondary"
            type="text"
            placeholder="Pay Details (Title)"
          />

          <input
            className="bg-white w-[136px] py-3 px-[15px] rounded outline-none border border-bg-secondary"
            type="text"
            placeholder="Amount"
          />

          <div className="flex items-center gap-4">
            <button className="p-[6px] bg-bg-secondary h-8 w-8 flex justify-center items-center rounded-full">
              <Image
                src="/images/x-icon.svg"
                alt="reset-icon"
                width={12}
                height={12}
              />
            </button>
            <div className=" flex items-center gap-2">
              <input className="h-[18px] w-[18px]" type="checkbox" />
              <p className="font-normal">EPF/ETF</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input
            className="bg-white w-[212px]  py-3 px-[15px] rounded outline-none border border-bg-secondary"
            type="text"
            placeholder="Pay Details (Title)"
          />

          <input
            className="bg-white w-[136px] py-3 px-[15px] rounded outline-none border border-bg-secondary"
            type="text"
            placeholder="Amount"
          />

          <div className="flex items-center gap-4">
            <button className="p-[6px] bg-bg-secondary h-8 w-8 flex justify-center items-center rounded-full">
              <Image
                src="/images/x-icon.svg"
                alt="reset-icon"
                width={12}
                height={12}
              />
            </button>
            <div className=" flex items-center gap-2">
              <input className="h-[18px] w-[18px]" type="checkbox" />
              <p className="font-normal">EPF/ETF</p>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-[9px] mt-[26px]">
          <Image
            src="/images/plus-icon.svg"
            alt="reset-icon"
            width={14}
            height={14}
          />
          <p className="text-[14px] font-medium text-secondary-color">
            Add New Allowance
          </p>
        </button>
      </div>

      {/* divide line */}
      <div className="border-t-[1px] border-bg-secondary w-full mt-[26px]"></div>

      {/* deductions */}
      <div className="mt-6">
        <p className="font-semibold">Deductions</p>
        <p className="text-[12px] text-text-secondary mt-1">
          Salary Advances, Loan Deductions and all.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <input
            className="bg-white w-[212px]  py-3 px-[15px] rounded outline-none border border-bg-secondary"
            type="text"
            placeholder="150,000.00"
          />

          <input
            className="bg-white w-[136px] py-3 px-[15px] rounded outline-none border border-bg-secondary"
            type="text"
            placeholder="150,000.00"
          />

          <div className="flex items-center gap-4">
            <button className="p-[6px] bg-bg-secondary h-8 w-8 flex justify-center items-center rounded-full">
              <Image
                src="/images/x-icon.svg"
                alt="reset-icon"
                width={12}
                height={12}
              />
            </button>
          </div>
        </div>

        <button className="flex items-center gap-[9px] mt-[26px]">
          <Image
            src="/images/plus-icon.svg"
            alt="reset-icon"
            width={14}
            height={14}
          />
          <p className="text-[14px] font-medium text-secondary-color">
            Add New Deduction
          </p>
        </button>
      </div>
    </div>
  );
}

export default CalculatorCard;
