"use client";
import React from "react";
import { useSalaryContext } from "../context/SalaryContext";

const SalaryCard = () => {
  const { basicSalary, earnings, deductions } = useSalaryContext();

  const totalEarnings = () => {
    return earnings.reduce(
      (total, earning) => total + earning.amount,
      basicSalary
    );
  };

  const calculateGrossEarnings = () => {
    return totalEarnings() - calculateGrossDeductions();
  };

  const calculateGrossDeductions = () => {
    return deductions.reduce((total, deduction) => total + deduction.amount, 0);
  };

  const calculateEmployeeEpf = () => {
    const applicableEarnings = earnings.filter(
      (earning) => earning.isEpfEtfEnable
    );
    const afterGrossDeduction =
      applicableEarnings.reduce(
        (total, earning) => total + earning.amount,
        basicSalary
      ) - calculateGrossDeductions();
    return afterGrossDeduction * 0.08;
  };

  const calculateEmployerEpf = () => {
    const applicableEarnings = earnings.filter(
      (earning) => earning.isEpfEtfEnable
    );
    const afterGrossDeduction =
      applicableEarnings.reduce(
        (total, earning) => total + earning.amount,
        basicSalary
      ) - calculateGrossDeductions();
    return afterGrossDeduction * 0.12;
  };

  const calculateEmployerEtf = () => {
    const applicableEarnings = earnings.filter(
      (earning) => earning.isEpfEtfEnable
    );
    const afterGrossDeduction =
      applicableEarnings.reduce(
        (total, earning) => total + earning.amount,
        basicSalary
      ) - calculateGrossDeductions();
    return afterGrossDeduction * 0.03;
  };

  const calculateApit = ():number => {
    const grossEarnings = calculateGrossEarnings();
    let apit: number;

    switch (true) {
      case grossEarnings <= 100000:
        apit = 0;
        break;
      case grossEarnings <= 141667:
        apit = 0.06 * grossEarnings - 6000;
        break;
      case grossEarnings <= 183333:
        apit = 0.12 * grossEarnings - 14500;
        break;
      case grossEarnings <= 225000:
        apit = 0.18 * grossEarnings - 25500;
        break;
      case grossEarnings <= 266667:
        apit = 0.24 * grossEarnings - 39000;
        break;
      case grossEarnings <= 308333:
        apit = 0.3 * grossEarnings - 55000;
        break;
      case grossEarnings > 308333:
        apit = 0.36 * grossEarnings - 73500;
        break;
      default:
        apit = 0;
        break;
    }

    return apit;
  };

  const grossEarnings = calculateGrossEarnings();
  const grossDeductions = calculateGrossDeductions();
  const employeeEpf = calculateEmployeeEpf();
  const employerEpf = calculateEmployerEpf();
  const employerEtf = calculateEmployerEtf();
  const apit = calculateApit();
  const netSalary = calculateGrossEarnings() - calculateEmployeeEpf() - apit ;
  const ctc = grossEarnings + employerEpf + employerEtf

  return (
    <div className="font-inter bg-bg-main p-6 border border-bg-secondary rounded-lg  w-[320px]  md:w-[480px]">
      <h3 className="text-xl font-bold">Your Salary</h3>
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
            <p>{basicSalary.toFixed(2)}</p>
          </div>

          <div className="flex justify-between ">
            <p>Gross Earning</p>
            <p>{grossEarnings.toFixed(2)}</p>
          </div>

          <div className="flex justify-between ">
            <p>Gross Deduction</p>
            <p>- {grossDeductions.toFixed(2)}</p>
          </div>

          <div className="flex justify-between ">
            <p>Employee EPF (8%)</p>
            <p>- {employeeEpf.toFixed(2)}</p>
          </div>

          <div className="flex justify-between ">
            <p>APIT</p>
            <p>- {apit.toFixed(2)}</p>
          </div>
        </div>

        {/* net salary */}
        <div>
          <div className="flex flex-col md:flex-row justify-between border border-bg-secondary rounded-[4px] p-4 mt-6">
            <p className="font-semibold">Net Salary (Take Home)</p>
            <p className="font-semibold">{netSalary.toLocaleString()}</p>
          </div>
        </div>

        {/* contribuiton part */}
        <div className="mt-6">
          <p className="text-[14px] font-semibold text-text-secondary">
            Contribution from the Employer
          </p>
          <div className="flex justify-between mt-3 ">
            <p>Employeer EPF (12%)</p>
            <p>{employerEpf.toFixed(2)}</p>
          </div>

          <div className="flex justify-between mt-2">
            <p>Employeer ETF (3%)</p>
            <p>{employerEtf.toFixed(2)}</p>
          </div>

          <div className="flex justify-between mt-8">
            <p>CTC (Cost to Company)</p>
            <p>{ctc.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCard;
