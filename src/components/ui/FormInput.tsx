import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import type { FieldError } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  /** Icon/button rendered inside the input on the right (e.g. password toggle) */
  rightElement?: ReactNode;
}

/**
 * Production-grade form input.
 * Accepts ref so it works directly with react-hook-form's `register()`.
 *
 * Usage:
 *   <FormInput label="Email" {...register("email")} error={errors.email} />
 */
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, rightElement, className = "", ...props }, ref) => {
    const id = props.id ?? props.name;

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="text-[#334155] text-[13px] font-normal leading-[18px] tracking-[0.35px] select-none"
        >
          {label}
        </label>

        <div className="relative flex items-center">
          <input
            id={id}
            ref={ref}
            className={[
              "w-full rounded-full border border-[#E2E8F0] bg-white",
              "px-[18px] py-[14px] pr-[52px]",
              "text-[15px] font-normal text-[#0B1C30]",
              "placeholder:text-[rgba(118,117,134,0.6)]",
              "outline-none transition-all duration-150",
              "focus:border-[#0B1C30] focus:ring-2 focus:ring-[#0B1C30]/10",
              error ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          />

          {rightElement && (
            <div className="absolute right-4 flex items-center">{rightElement}</div>
          )}
        </div>

        {error?.message && (
          <p className="text-red-500 text-xs leading-4 pl-1">{error.message}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
