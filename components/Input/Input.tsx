import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
  containerProps?: DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export const Input = ({
  error,
  label,
  containerProps,
  ...inputProps
}: InputProps) => {
  return (
    <div
      {...containerProps}
      className={classNames(
        "flex flex-col text-sm rounded-full",
        containerProps?.className ? containerProps.className : ""
      )}
    >
      {label && <label className="text-sm mb-1">{label}</label>}

      <div
        className={classNames(
          "flex rounded-full border bg-white border-gray-200 p-1",
          {
            "border-red-400": !!error,
          }
        )}
      >
        <input
          {...inputProps}
          type="text"
          className={classNames(
            "rounded-full bg-white text-black px-2 outline-none w-full",
            inputProps.className ? inputProps.className : ""
          )}
        />
      </div>
      {error && <div className="text-red-400 text-xs mt-2 ml-4">{error}</div>}
    </div>
  );
};
