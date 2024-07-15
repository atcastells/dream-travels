import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type TextAreaProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  error?: string;
  containerProps?: DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export const TextArea = ({
  error,
  label,
  containerProps,
  ...inputProps
}: TextAreaProps) => {
  return (
    <div
      {...containerProps}
      className={classNames(
        "flex flex-col text-sm",
        containerProps?.className ? containerProps.className : ""
      )}
    >
      {label && <label className="text-sm mb-1">{label}</label>}
      <div
        className={classNames(
          "flex rounded-xl border bg-white border-gray-200 p-1",
          {
            "border-red-400": !!error,
          }
        )}
      >
        <textarea
          {...inputProps}
          className={classNames("bg-white text-black px-2 outline-none w-full")}
          rows={4}
        />
      </div>
      {error && <div className="text-red-400 text-xs mt-2 ml-4">{error}</div>}
    </div>
  );
};
