import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren<{}>;
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        props?.className ? props.className : "",
        "rounded-full px-2"
      )}
    >
      {children}
    </button>
  );
};
