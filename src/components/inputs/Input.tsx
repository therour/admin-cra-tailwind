import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, isError, ...rest },
  ref
) {
  const classes = classNames(
    "form-input-base",
    {
      "form-input-normal": !isError,
      "form-input-error": isError,
    },
    className
  );

  return <input {...rest} ref={ref} className={classes} />;
});

export default Input;
