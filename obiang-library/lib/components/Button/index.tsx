import { ReactNode } from "react";
import classNames from "classnames";

//styles
import "./index.scss";

interface ButtonDto {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  border?: "none" | "border-1" | "border-2" | "border-3" | "border-4";
  borderColor?: "Yellow" | "lowYellow" | "blue" | "lowBlue";
  color?: "Yellow" | "lowYellow" | "blue" | "lowBlue" | "white" | "black";
  background?: "Yellow" | "lowYellow" | "blue" | "lowBlue";
  hoverBackground?: "Yellow" | "lowYellow" | "blue" | "lowBlue";
  fontSize?: 10 | 15 | 20 | 25 | 30 | 35 | 40;
  onClick?: () => void;
  ref?: any;
  width?: string;
}
export default function Button(props: ButtonDto) {
  const {
    children,
    className,
    disabled,
    color,
    background,
    fontSize,
    border,
    borderColor,
    hoverBackground,
    ...bottonProps
  } = props;
  const propsClass = `${className ? className : ""} ${
    color ? `color-${color}` : ""
  } ${background ? `background-${background}` : ""} ${
    fontSize ? `font-size-${fontSize}` : ""
  } ${border ? `border-${border}` : ""} ${
    borderColor ? `border-color-${borderColor}` : ""
  } ${hoverBackground ? `hover-background-${hoverBackground}` : ""}`;

  return (
    <button
      className={classNames(`button-container ${propsClass}`, {
        "disabled-button": disabled,
      })}
      {...bottonProps}
    >
      {children}
    </button>
  );
}
