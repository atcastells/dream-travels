import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button/Button";

interface ButtonGroupProps {
  buttonText: React.ReactNode[];
  onSelect?: (index: number) => void;
}

export const ButtonGroup = ({ buttonText, onSelect }: ButtonGroupProps) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    onSelect?.(selected);
  }, [selected]);

  const buttons = useMemo(() => {
    return buttonText.map((text, index) => {
      const isFirst = index === 0;
      const isLast = index === buttonText.length - 1;
      return (
        <Button
          key={index}
          className={classNames(
            "py-2 border-grey-200 border",
            isFirst ? "rounded-l-full rounded-r-none" : "",
            isLast ? "rounded-r-full rounded-l-none" : "",
            !isFirst && !isLast ? "rounded-none" : "",
            selected === index ? "bg-gray-100" : ""
          )}
          onClick={() => {
            setSelected(index);
          }}
        >
          {text}
        </Button>
      );
    });
  }, [buttonText, selected]);

  return (
    <div className="flex flex-row items-center justify-center my-4">
      {buttons}
    </div>
  );
};
