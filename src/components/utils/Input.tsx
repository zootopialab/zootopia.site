import clsx from "clsx";
import React from "react";

const BaseInput: React.FC<{
  id: string;
  name: string;
  value?: string | number | undefined;
  type: "checkbox" | "radio";
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: string;
  icon?: any;
  checkedIcon?: any;
  className?: string;
  onChange?: (event: any) => void;
}> = ({
  id,
  name,
  value,
  type,
  defaultChecked,
  checked,
  disabled,
  size,
  icon,
  checkedIcon,
  className,
  onChange,
}) => {
  return (
    <>
      <input
        id={id}
        aria-describedby={`${name}-description`}
        name={name}
        type={type}
        className={clsx(
          className ?? "",
          icon ? "hidden" : "",
          size == "small"
            ? "h-3 w-3"
            : size == "medium"
            ? "h-4 w-4"
            : size == "large"
            ? "h-5 w-5"
            : "h-6 w-6",
          {
            "rounded-sm": type == "checkbox",
            "rounded-full": type == "radio",
          },
          {
            "border-gray-200 bg-gray-100 dark:bg-slate-300 dark:border-0 dark:hover:bg-slate-300 cursor-not-allowed":
              disabled,
            "cursor-pointer focus:ring-0 focus:ring-offset-0 active:ring-0 active:ring-offset-0 ":
              !disabled,
          },
          "accent-primary appearance-none"
        )}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
      {icon && checkedIcon && (
        <div className="cursor-pointer" onClick={onChange}>
          {checked ? checkedIcon : icon}
        </div>
      )}
    </>
  );
};

export default BaseInput;
