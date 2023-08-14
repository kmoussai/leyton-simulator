import useFormContext from "../../hooks/use-form-context";
import InfoForm from "./info-form";
import PayRollForm from "./pay-roll-form";

/**
 * 
 * FormInput is the component that render Form based on the step or page that we are at
 * so we have here two component the PayRollForm that we render first
 * and after the user click next we render the next one which is InfoForm that collect user info
 */
export default function FormInput() {
  const { page } = useFormContext();
  const display: Record<number, any> = {
    0: <PayRollForm />,
    1: <InfoForm />,
  };
  return <div className="h-[500px] md:h-[450px] w-full p-7">{display[page]}</div>;
}
