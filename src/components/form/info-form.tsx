import useFormContext from "../../hooks/use-form-context";
import Input from "../shared/input";
import Select from "../shared/select";
import StepsInfo from "../steps-info";

/**
 *  This component help us render the form that collect user infos
 *  and it's has the step indicator on top right side that use
 *  StepInfo component and based on the data that coming from ContextApi
 *  shows which step the user is currently in
 *
 */

export default function InfoForm() {
  const {
    userInfo,
    handleChangeUserInfo,
    numberOfPages,
    page,
    handlePageChange,
  } = useFormContext();
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex justify-between">
          <h2 className="font-bold text-secondary-2">
            {" "}
            Please fill the form below to see the results
          </h2>
          <StepsInfo
            numberOfSteps={numberOfPages}
            currentStep={page}
            handleStepChange={(newPage) => handlePageChange(newPage)}
          />
        </div>
        <div className="flex flex-col space-y-4 w-full lg:w-3/4">
          <Select
            onChange={handleChangeUserInfo}
            name={"title"}
            value={userInfo.title}
            label="Title"
            options={[
              { label: "Mr", value: "Mr" },
              { label: "Mrs", value: "Mrs" },
              { label: "Miss", value: "Miss" },
            ]}
          />
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                onChange={handleChangeUserInfo}
                value={userInfo.firstName}
                placeholder="john"
                label="First name"
                name="firstName"
              />
            </div>
            <div className="flex-1">
              <Input
                onChange={handleChangeUserInfo}
                value={userInfo.lastName}
                placeholder="Example"
                label="Last name"
                name="lastName"
              />
            </div>
          </div>
          <Input
            onChange={handleChangeUserInfo}
            value={userInfo.company}
            placeholder="Example"
            label="Company"
            name="company"
          />
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                onChange={handleChangeUserInfo}
                value={userInfo.phoneNumber}
                placeholder="+1 000 00 00"
                label="Phone number"
                name="phoneNumber"
              />
            </div>
            <div className="flex-1">
              <Input
                onChange={handleChangeUserInfo}
                value={userInfo.email}
                placeholder="example@gmail.com"
                label="Email address"
                name="email"
                type="email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
