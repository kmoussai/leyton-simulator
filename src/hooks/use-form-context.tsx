import { useContext } from "react";

import { FormContext } from "../context/form-context";

/**
 *
 * this is a custom hook to easy accessing context api state
 */
export default function useFormContext() {
  return useContext(FormContext);
}
