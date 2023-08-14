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
        style={{
          // this is a workarround to ovride native select on safari/iphones
          background:
            "url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+') no-repeat 100% 50%",
          WebkitAppearance: "none",
          borderRadius: 0,
        }}
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
