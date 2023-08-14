import Form from "./form/form";
import SimulatorResult from "./simulator-result";
import useFormContext from "../hooks/use-form-context";
import ThankYou from "./thank-you";
/**
 *
 * This component help us create the layout for the form
 * and create the simulator result screen
 */
export default function Layout() {
  const { submitted } = useFormContext();

  return (
    <div className="flex flex-col lg:grid grid-cols-3 w-full gap-8 ">
      <div className=" flex-2 col-span-2">
        {submitted ? <ThankYou /> : <Form />}
      </div>
      <SimulatorResult />
    </div>
  );
}
