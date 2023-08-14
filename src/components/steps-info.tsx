import clsx from "clsx";
interface StepInfoProps {
  currentStep: number;
  numberOfSteps: number;
  handleStepChange: (newStep: number) => void;
}

/**
 * 
 * This component show infos on which step the user is currently in
 * with a custom styling
 * and it's re-usable for more use cases
 *  
 */
export default function StepsInfo(props: StepInfoProps) {
  const { currentStep, handleStepChange, numberOfSteps } = props;
  return (
    <div className="pt-1">
      <ul className="flex space-x-3">
        {Array.from({ length: numberOfSteps }, (i: number) => i).map(
          (item, index) => {
            return (
              <li
                onClick={() => handleStepChange(index)}
                key={index}
                className={clsx("h-[10px] rounded-full border", {
                  "w-[10px]": currentStep !== index,
                  "w-[30px]": currentStep === index,
                  "border-neutrals-900": currentStep < index,
                  "border-primary-1 bg-primary-1": currentStep >= index,
                })}
              ></li>
            );
          }
        )}
      </ul>
    </div>
  );
}
