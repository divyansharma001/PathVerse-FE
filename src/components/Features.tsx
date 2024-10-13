"use client";
import React from 'react';
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Discover PathVest&apos;s Powerful Features
      </h2>
      <HoverEffect items={features} />
    </div>
  );
}

export const features = [
  {
    title: "Smart Portfolio Management",
    description:
      "Utilize AI-driven algorithms to optimize your investment portfolio based on your risk tolerance and financial goals.",
    link: "#portfolio-management",
  },
  {
    title: "Real-Time Market Insights",
    description:
      "Access up-to-the-minute market data and expert analysis to make informed investment decisions.",
    link: "#market-insights",
  },
  {
    title: "Automated Investing",
    description:
      "Set up automatic investments and let PathVest handle the rest, ensuring your money is always working for you.",
    link: "#automated-investing",
  },
  {
    title: "Tax-Efficient Strategies",
    description:
      "Maximize your returns with our tax-optimization features, designed to minimize your tax liability on investments.",
    link: "#tax-strategies",
  },
  {
    title: "Personalized Financial Planning",
    description:
      "Receive tailored advice and create a comprehensive financial plan that adapts to your changing life circumstances.",
    link: "#financial-planning",
  },
  {
    title: "Secure Account Management",
    description:
      "Enjoy peace of mind with our state-of-the-art security measures, protecting your investments and personal information.",
    link: "#account-security",
  },
];