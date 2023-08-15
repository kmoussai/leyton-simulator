import { createContext, useState, ReactNode } from "react";

/**
 *
 * interface for data that help us run the simulation
 * and it's contains the 3 params for the simulation which is :
 * totalGrossWages, totalProjectPerMonth, ordersFromThirdParties
 */
interface IData {
  totalGrossWages: string;
  totalProjectPerMonth: string;
  ordersFromThirdParties: string;
}

interface FormProviderProps {
  children: ReactNode;
}

/**
 *
 * interface for user infos
 *
 */
interface IUserInfo {
  title: string;
  firstName: string;
  lastName: string;
  company: string;
  phoneNumber: string;
  email: string;
}

/**
 * this interface help us define the most important states that we need to include in our
 * contextAPI to make sure that our forms run smoothly
 * we will explain every element along the way
 */
interface IFormContext {
  data: IData;
  userInfo: IUserInfo;
  page: number;
  resetForm: () => void;
  canSubmit: () => boolean;
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
  handleChange: (e: any) => void;
  handleChangeUserInfo: (e: any) => void;
  handlePageChange: (value: number) => void;
  numberOfPages: number;
}

/**
 * default values for contextApi States
 */

const defaultContextValue: IFormContext = {
  page: 0,
  resetForm: () => {},
  handlePageChange: (value: number) => {},
  setSubmitted: (value: boolean) => {},
  handleChange: (e: any) => {},
  canSubmit: () => false,
  submitted: false,
  handleChangeUserInfo: (e: any) => {},
  numberOfPages: 2,
  userInfo: {
    company: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
  },
  data: {
    ordersFromThirdParties: "",
    totalGrossWages: "",
    totalProjectPerMonth: "",
  },
};

/**
 * Here we create the context using the createContext function from react lib
 * and make an initialization the values
 */
export const FormContext = createContext<IFormContext>(defaultContextValue);

/**
 *
 * Here we are creating the Form provider that we will use wrap the form with
 * and help us accessing the states and manipulate it
 */

export const FormProvider = ({ children }: FormProviderProps) => {
  // we are using page state to define which step we are at in our form
  const [page, setPage] = useState(0);
  //with this state we know if the form has been submitted and based on that we show thank-you page
  const [submitted, setSubmitted] = useState(false);
  // this data state hold the simulation params
  const [data, setData] = useState<IData>(defaultContextValue.data);
  // we use user info to store user data from the second form
  const [userInfo, setUserInfo] = useState<IUserInfo>(
    defaultContextValue.userInfo
  );
  // function to handle page switch make sure that we are on the correct page on each step
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < defaultContextValue.numberOfPages)
      setPage(newPage);
  };

  /**
   * This function handle input changes for simulation params
   * @param event
   */

  const handleChange = (event: any) => {
    // we are using it in a generic way by taking the name of the input
    // so we can define which element we should update
    const name = event.target.name;
    console.log({ name, value: event.target.value });

    setData((prevData: IData) => ({
      ...prevData,
      [name]: event.target.value,
    }));
  };

  /**
   * this function handle input changes for user data
   * @param event
   */
  const handleChangeUserInfo = (event: any) => {
    const name = event.target.name;

    setUserInfo((prevData: IUserInfo) => ({
      ...prevData,
      [name]: event.target.value,
    }));
  };

  /**
   * This function check if all input are filled
   * and here we can add more validations
   *
   * @returns boolean
   */
  const canSubmit = (): boolean => {
    return [...Object.values(userInfo)].every(Boolean);
  };

  /**
   * This function reset all contextApi data to it's initial state
   */
  const resetForm = () => {
    setData(defaultContextValue.data);
    setUserInfo(defaultContextValue.userInfo);
    setPage(0);
    setSubmitted(false);
  };

  return (
    <FormContext.Provider
      value={{
        resetForm,
        canSubmit,
        submitted,
        setSubmitted,
        userInfo,
        numberOfPages: defaultContextValue.numberOfPages,
        data,
        page,
        handlePageChange,
        handleChange,
        handleChangeUserInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
