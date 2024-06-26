
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SalaryProvider } from "../app/context/SalaryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salary Calculator",
  description: "Developed By Thanuja Fernando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SalaryProvider>
          {children}
        </SalaryProvider>
      </body>
    </html>
  );
}
