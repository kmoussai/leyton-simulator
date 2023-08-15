import { useContext } from "react";

import { FormContext } from "../context/form-context";

/**
 *
 * this is a custom hook to easy accessing context api state
 */
export default function useFormContext() {
  const context =  useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext should be used inside a <FormProvider />');
  }

  return context;
}
