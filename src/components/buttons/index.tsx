import classNames from "classnames";
import { ButtonHTMLAttributes, PureComponent, ReactNode } from "react";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary";
}

export class Button extends PureComponent<ButtonType> {
  render(): ReactNode {
    const { className, children, color, ...rest } = this.props;

    const classes = classNames(
      "btn",
      {
        "btn-primary": color === "primary",
      },
      className
    );

    return (
      <button {...rest} className={classes}>
        {this.props.children}
      </button>
    );
  }
}
