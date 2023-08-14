/**
 *
 * This is a re-usable component for Select
 * that contains basic logic for select with options and some custom styling
 * and it's easy to use or extends the logic for more use cases
 */

export default function Select({
  label,
  options,
  ...selectProps
}: {
  value: string;
  label?: string;
  options: { value: string; label: string }[];
  onChange?: (e: any) => void;
  name?: string;
}) {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium text-secondary-2 ">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        placeholder="--"
        defaultValue={"--"}
        id="countries"
        className="border border-neutrals-900 text-sm focus:outline-none block w-full p-2.5"
      >
        <option value="--">--</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
