import React, { forwardRef, useId } from "react";
import { Input, InputProps } from "../inputs";

interface InputFieldProps extends Omit<InputProps, "className"> {
  label?: string;
  errorMessage?: React.ReactNode;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { id, label, isError, errorMessage, required, ...rest },
    ref
  ) {
    const generatedId = useId();
    const elementId = id || `input-${generatedId}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={elementId}
            className="block text-sm font-medium text-gray-700"
          >
            {label} {required && <span className="required">*</span>}
          </label>
        )}
        <Input
          id={elementId}
          isError={isError}
          required={required}
          {...rest}
          className="mt-1"
          ref={ref}
        />
        {Boolean(isError && errorMessage) && (
          <div className="text-danger-500 text-xs mt-1">{errorMessage}</div>
        )}
      </div>
    );
  }
);

export default InputField;
