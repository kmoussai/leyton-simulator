import clsx from "clsx";
interface ButtonProps {
  title: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

/**
 *
 * This is a re-usable component for button
 * that contains main logic for button and some custom styling 
 * and it's easy to use or extends the logic here
 */
export default function Button({
  title,
  className,
  onClick = () => {},
  type = "primary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "py-4 w-full md:w-1/3 font-medium cursor-pointer select-none hover:shadow-lg",
        {
          "bg-primary-1 text-white": type === "primary",
          "bg-white border border-secondary-2": type === "secondary",
        },
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
