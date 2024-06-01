"use client"
import React, { createContext, useState, ReactNode, useContext } from "react";

type Earning = {
  id: number;
  title: string;
  amount: number;
  isEpfEtfEnable: boolean;
};

type Deduction = {
  id: number;
  title: string;
  amount: number;
};

type SalaryContextType = {
  basicSalary: number;
  earnings: Earning[];
  deductions: Deduction[];
  setBasicSalary: (salary: number) => void;
  addEarning: (earning: Omit<Earning, "id">) => void;
  updateEarning: (id: number, earning: Partial<Earning>) => void;
  deleteEarning: (id: number) => void;
  addDeduction: (deduction: Omit<Deduction, "id">) => void;
  updateDeduction: (id: number, deduction: Partial<Deduction>) => void;
  deleteDeduction: (id: number) => void;
  resetForm: () => void;
};

const SalaryContext = createContext<SalaryContextType | undefined>(undefined);

export const useSalaryContext = () => {
  const context = useContext(SalaryContext);
  if (!context) {
    throw new Error("useSalaryContext must be used within a SalaryProvider");
  }
  return context;
};

type SalaryProviderProps = {
  children: ReactNode;
};

export const SalaryProvider = ({ children }: SalaryProviderProps) => {
  const [basicSalary, setBasicSalary] = useState<number>(0);
  const [earnings, setEarnings] = useState<Earning[]>([]);
  const [deductions, setDeductions] = useState<Deduction[]>([]);

  const addEarning = (earning: Omit<Earning, "id">) => {
    setEarnings((prev) => [...prev, { id: Date.now(), ...earning }]);
  };

  const updateEarning = (id: number, updatedEarning: Partial<Earning>) => {
    setEarnings((prev) =>
      prev.map((earning) =>
        earning.id === id ? { ...earning, ...updatedEarning } : earning
      )
    );
  };

  const deleteEarning = (id: number) => {
    setEarnings((prev) => prev.filter((earning) => earning.id !== id));
  };

  const addDeduction = (deduction: Omit<Deduction, "id">) => {
    setDeductions((prev) => [...prev, { id: Date.now(), ...deduction }]);
  };

  const updateDeduction = (
    id: number,
    updatedDeduction: Partial<Deduction>
  ) => {
    setDeductions((prev) =>
      prev.map((deduction) =>
        deduction.id === id ? { ...deduction, ...updatedDeduction } : deduction
      )
    );
  };

  const deleteDeduction = (id: number) => {
    setDeductions((prev) => prev.filter((deduction) => deduction.id !== id));
  };

  const resetForm = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
  };

  return (
    <SalaryContext.Provider
      value={{
        basicSalary,
        earnings,
        deductions,
        setBasicSalary,
        addEarning,
        updateEarning,
        deleteEarning,
        addDeduction,
        updateDeduction,
        deleteDeduction,
        resetForm,
      }}
    >
      {children}
    </SalaryContext.Provider>
  );
};

