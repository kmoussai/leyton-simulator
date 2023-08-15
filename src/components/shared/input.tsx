import { ReactNode } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: "number" | "text" | "email";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  value?: string | number;
  onChange?: (e: any) => void;
  format?: Formatter;
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
    startIcon,
    endIcon,
    type = "text",
    value,
    onChange,
    format,
    ...inputProps
  } = props;

  return (
    <div className="space-y-2">
      <label className="text-secondary-2 text-base md:text-lg">{label} :</label>
      <div className="flex justify-between border border-neutrals-900 p-[10px] gap-1 focus-within:shadow-lg">
        <div className="flex space-x-1  w-full">
          {startIcon && startIcon}
          <input
            {...inputProps}
            onChange={(e) => {
              if (format && onChange)
                onChange({
                  ...e,
                  target: {
                    ...e.target,
                    name: e.target.name,
                    value: format.format(e.target.value),
                  },
                });
              else if (onChange) onChange(e);
            }}
            value={value}
            type={type}
            className=" w-full focus:outline-none text-secondary-2"
          />
        </div>
        {endIcon && endIcon}
      </div>
    </div>
  );
}

// const FLOAT_REGEX = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/

export class Formatter {
  private formats: ((val: string) => string)[] = [];

  public format(value: string): string {
    return this.formats.reduce((a, b) => b(a), value);
  }

  public number() {
    this.formats.push((val: string) => val.replace(/\D/g, ""));
    return this;
  }

  public float() {
    this.formats.push((val: string) =>
      val.replace(/[^\d,-\s]/g, "").replace(/(,[^,]*),/g, "$1")
    );
    return this;
  }
}

const formatter = () => new Formatter();

export { formatter };
