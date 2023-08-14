import React, { useMemo } from "react";
import useFormContext from "../hooks/use-form-context";

/**
 * this screen help us view th simulator results 
 * and contains the calculation logic
 */
export default function SimulatorResult() {
  const {
    data: { ordersFromThirdParties, totalGrossWages, totalProjectPerMonth },
  } = useFormContext();

  // here we recalculate every time th simulation params changes
  const [personnelCosts, ordersToThirdParties, potentialResearchAllowance] =
    useMemo(() => {
      const personnelCosts = (totalGrossWages / 12) * totalProjectPerMonth;
      const potentialResearchAllowance =
        personnelCosts * 0.25 + ordersFromThirdParties * 0.15;

      return [
        personnelCosts,
        ordersFromThirdParties,
        potentialResearchAllowance,
      ];
    }, [totalGrossWages, ordersFromThirdParties, totalProjectPerMonth]);
    
  return (
    <div className="bg-primary-1 py-14 px-7 space-y-20 h-full lg:h-[600px] w-full">
      <h2 className="text-white font-medium text-2xl md:text-3xl">
        You could receive up to:
      </h2>
      <div className="space-y-8">
        <div className="font-normal text-lg md:text-xl text-white flex justify-between pr-4">
          <p>Personnel Costs</p>
          <p className=" text-white text-xl md:text-3xl font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(personnelCosts)}
          </p>
        </div>
        <div className="font-normal text-lg md:text-xl text-white flex justify-between pr-4">
          <p>Orders to Third Parties</p>
          <p className=" text-white text-xl md:text-3xl font-medium">
            € {ordersToThirdParties}
          </p>
        </div>
        <div className="border border-white" />
        <div className="font-normal text-lg md:text-xl text-white flex justify-between pr-4">
          <p>Your potential research allowance</p>
          <p className=" text-white text-xl md:text-3xl font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "EUR",
            }).format(potentialResearchAllowance)}
          </p>
        </div>
      </div>
    </div>
  );
}
