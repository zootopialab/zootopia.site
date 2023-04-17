import { FunctionComponent, useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";

const rounded = ["sm", "md", "lg", "xl", "2xl", "3xl", "full"] as const;
const size = [
  "extra-small",
  "small",
  "medium",
  "large",
  "extra-large",
] as const;
const variant = ["outlined", "standard", "filled"] as const;

export type TextFieldProps = {
  className?: any;
  variant?: typeof variant[number];
  InputProps?: {
    readOnly?: boolean;
    shrink?: boolean;
    startAdornment?: any;
    endAdornment?: any;
  };
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  error?: boolean;
  type?: string;
  label?: any;
  id?: string;
  name?: string;
  size?: typeof size[number];
  fullWidth?: boolean;
  rounded?: typeof rounded[number];
  margin?: "dense" | "normal";
  color?: string;
  defaultValue?: string;
  value?: string;
  endAdornment?: any;
  onChange?: (event: any) => void;
  onKeyDown?: (event: any) => void;
  handleOnChange?: (event: any) => void;
};

const TextField: FunctionComponent = (props: TextFieldProps) => {
  const {
    className,
    variant = "outlined",
    InputProps,
    placeholder,
    helperText,
    required,
    disabled,
    error,
    type,
    label,
    size = "medium",
    fullWidth = false,
    rounded = "md",
    name,
    defaultValue,
    value,
    onChange,
    onKeyDown,
    ...other
  } = props;

  const [startAdornmentElement, setStartAdornmentElement] =
    useState<Element | null | undefined>(null);
  const [endAdornmentElement, setEndAdornmentElement] =
    useState<Element | null | undefined>(null);

  const height =
    size == "extra-small"
      ? "h-[1.75rem] text-xs"
      : size == "small"
      ? "h-[2.125rem] text-xs"
      : size == "medium"
      ? "h-[2.375rem] text-xs"
      : size == "large"
      ? "h-[2.625rem] text-xs"
      : size == "extra-large"
      ? "h-[3.125rem] text-xs"
      : "h-[2.375rem] text-xs";

  return (
    <>
      <div className={clsx("relative")}>
        {/* label */}
        {label && (
          <label
            className={clsx(
              "flex mb-1 text-left text-xs font-medium text-gray-700 dark:text-slate-400"
            )}
          >
            {label}

            {required && <p className="ml-1 text-red-500">*</p>}
          </label>
        )}

        <div className={clsx("relative", { "w-fit": !fullWidth })}>
          {/* Adornments */}
          {InputProps?.startAdornment && (
            <div
              ref={setStartAdornmentElement}
              className="absolute transform -translate-y-1/2 top-1/2 left-3"
            >
              {InputProps.startAdornment}
            </div>
          )}

          {/* InputBase */}
          <input
            style={{
              paddingLeft:
                startAdornmentElement?.clientWidth == undefined
                  ? 13
                  : startAdornmentElement?.clientWidth + 16,
              paddingRight:
                endAdornmentElement?.clientWidth == undefined
                  ? 13
                  : endAdornmentElement?.clientWidth + 16,
            }}
            className={clsx(
              className,
              fullWidth ? "w-full" : "",
              "leading-none",
              height,
              {
                "rounded-sm": rounded == "sm",
                "rounded-md": rounded == "md",
                "rounded-lg": rounded == "lg",
                "rounded-xl": rounded == "xl",
                "rounded-2xl": rounded == "2xl",
                "rounded-3xl": rounded == "3xl",
                "rounded-full": rounded == "full",
              },
              "disabled:bg-gray-200 disabled:cursor-not-allowed disabled:dark:bg-slate-500",
              "read-only:bg-gray-200 read-only:cursor-default dark:read-only:bg-slate-500",
              disabled
                ? "border-gray-300"
                : InputProps?.readOnly
                ? ""
                : error
                ? {
                    "border-danger focus:border-danger": variant == "outlined",
                    "border-t-0 border-r-0 border-l-0 border-danger focus:border-danger":
                      variant == "standard",
                    "border-0 bg-danger/20": variant == "filled",
                    "dark:bg-danger/20": true,
                  }
                : {
                    "hover:border-primary dark:bg-slate-900":
                      variant == "outlined",
                    "border-t-0 border-r-0 border-l-0 hover:border-primary dark:bg-slate-900":
                      variant == "standard",
                    "bg-gray-300 border-0 hover:border-primary dark:bg-slate-700":
                      variant == "filled",
                    "border-gray-300 dark:text-slate-300 dark:border-slate-600 dark:hover:border-sky-700 dark:focus:border-sky-700":
                      true,
                  },
              !disabled && "focus:outline-none focus:ring-0 "
            )}
            disabled={disabled}
            type={type ? type : "text"}
            name={name}
            readOnly={InputProps?.readOnly}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onKeyDown={(event) => onKeyDown && onKeyDown(event)}
            autoComplete="off"
            onChange={onChange}
            {...other}
          />
          {InputProps?.endAdornment && (
            <div
              ref={setEndAdornmentElement}
              className="absolute transform -translate-y-1/2 top-1/2 right-3"
            >
              {InputProps.endAdornment}
            </div>
          )}
        </div>

        <div className="flex items-center">
          {error && (
            <ExclamationCircleIcon
              className="w-4 h-4 mr-1 text-danger"
              aria-hidden="true"
            />
          )}
          {/* HelperText */}
          {helperText && (
            <p
              className={clsx(
                error && "text-danger dark:text-danger",
                "text-xs text-left dark:text-slate-300"
              )}
            >
              {helperText}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TextField;
