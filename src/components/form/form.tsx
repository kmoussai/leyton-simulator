import FormInput from "./form-input";
import useFormContext from "../../hooks/use-form-context";
import Button from "../shared/button";

/**
 *
 * Here we create the form layout by adding next button below and including the FormInput
 * that help us figure out which step should we render based on page that come from ContextApi state
 */

export default function Form() {
  const {
    page,
    handlePageChange,
    numberOfPages,
    data,
    userInfo,
    canSubmit,
    setSubmitted,
  } = useFormContext();

  /**
   * Here we check if can submit data by calling canSubmit function
   * and if we can't submit in that case we have some missing user info
   * we alert the user to fill the form
   */
  const submit = () => {
    if (canSubmit()) {
      setSubmitted(true);
      console.log({ data, userInfo });
    } else alert("Please fill the form");
  };

  return (
    <div className="px-4 py-4 md:py-7 md:px-24 space-y-6 flex flex-col">
      <div className="flex justify-between">
        <FormInput />
      </div>
      <div className="flex justify-end w-full">
        <div className="flex space-x-3 justify-end w-full">
          {page > 0 && (
            <Button
              title="Back"
              type="secondary"
              onClick={() => {
                handlePageChange(page - 1);
              }}
            ></Button>
          )}
          <Button
            title="Next"
            onClick={() => {
              if (page === numberOfPages - 1) submit();
              else handlePageChange(page + 1);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
