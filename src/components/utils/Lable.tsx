import React from "react";

function Label({ label }: { label?: React.ReactNode }) {
  return (
    <label className={"flex mb-1 text-left text-sm font-medium text-gray-700 "}>
      {label}
    </label>
  );
}

export default Label;
