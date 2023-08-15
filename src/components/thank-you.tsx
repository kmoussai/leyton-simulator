import useFormContext from "../hooks/use-form-context";
import Done from "./icons/done";
import Button from "./shared/button";
/**
 *
 * Thanks you component
 * with a button that help us reset the contextApi
 * And start new simulation
 */

export default function ThankYou() {
  const { resetForm } = useFormContext();

  return (
    <div className="flex h-full w-full justify-center items-center px-4 py-4 md:py-7 md:px-24">
      <div className="flex space-x-16 p-8">
        <Done />
        <div className="space-y-8">
          <h2 className="font-medium text-4xl text-primary-1">
            Thank you for your submission!
          </h2>
          <p className="font-normal text-lg text-secondary-2">
            We will contact you very soon.
          </p>
          <Button
            className="!w-full"
            onClick={resetForm}
            title="Eine weitere Berechnung vornehmen​"
          />
        </div>
      </div>
    </div>
  );
}
