import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-6)",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "Monospace",
  ...generalStyle,
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div className="mb">
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="date"
        name={label}
        id={label}
        {...props}
      />
    </div>
  );
};

export default DateInput;
