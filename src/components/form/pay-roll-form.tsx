import useFormContext from "../../hooks/use-form-context";
import EuroIcon from "../icons/euro";
import Input from "../shared/input";
import StepsInfo from "../steps-info";

/**
 * This component contains the form that collect simulator params and apply the changes 
 * to the ContextApi state so we can use the in SimulatorResult Component
 * 
 */
export default function PayRollForm() {
  const { handleChange, data, numberOfPages, page, handlePageChange } =
    useFormContext();
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex justify-between">
          <h2 className="font-bold text-secondary-2">Eligible Wages</h2>
          <StepsInfo
            numberOfSteps={numberOfPages}
            currentStep={page}
            handleStepChange={(newPage) => handlePageChange(newPage)}
          />
        </div>
        <div className="flex flex-col space-y-7 w-full lg:w-3/4">
          <Input
            onChange={handleChange}
            icon={<EuroIcon />}
            type="number"
            value={data.totalGrossWages}
            name="totalGrossWages"
            label="Total gross wages of R&D employees/year"
          />
          <Input
            type="number"
            onChange={handleChange}
            name="totalProjectPerMonth"
            value={data.totalProjectPerMonth}
            action={{
              label: "Monate",
              onClick: () => {},
            }}
            label="Total project months (No limit to the duration of a project)"
          />
        </div>
      </div>

      <div className="space-y-6 w-full lg:w-3/4">
        <h2 className="font-bold text-secondary-2">Contract Research</h2>

        <div className="flex flex-col space-y-7">
          <Input
            onChange={handleChange}
            name="ordersFromThirdParties"
            value={data.ordersFromThirdParties}
            icon={<EuroIcon />}
            type="number"
            label="Orders from third parties for your R&D projects (Net)"
          />
        </div>
      </div>
    </div>
  );
}
