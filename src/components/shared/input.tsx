import { ReactNode } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: "number" | "text" | 'email';
  icon?: ReactNode;
  value?: string | number;
  onChange?: (e: any) => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}
/**
 *
 * This is a re-usable component for input
 * that contains basic logic for input (Text/number) and some custom styling 
 * and it's easy to use or extends the logic for other type of input
 */

export default function Input(props: InputProps) {
  const {
    label = "",
    icon: Icon,
    type = "text",
    action,
    value,
    onChange,
    ...inputProps
  } = props;

  return (
    <div className="space-y-2">
      <label className="text-secondary-2 text-base md:text-lg">{label} :</label>
      <div className="flex justify-between border border-neutrals-900 p-[10px] gap-1 focus-within:shadow-lg">
        <div className="flex space-x-1  w-full">
          {Icon && Icon}
          <input
            {...inputProps}
            onChange={onChange}
            value={value}
            type={type}
            className=" w-full focus:outline-none text-secondary-2"
          />
        </div>
        {action && (
          <button
            onClick={action.onClick}
            className="text-primary-1 font-normal"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}
