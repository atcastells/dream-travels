import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string;
};

export const Input = ({ error, ...inputProps }: InputProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={classNames("flex rounded-full border border-gray-200 p-1", {
          "border-red-400": !!error,
        })}
      >
        <input
          {...inputProps}
          type="text"
          className={classNames(
            "rounded-full bg-white text-black px-2 outline-none w-full"
          )}
        />
      </div>
      {error && <div className="text-red-400 text-xs mt-2 ml-4">{error}</div>}
    </div>
  );
};
