// Custom components
import React from "react";

function InputField(props) {
  const { label, id, extra, type, placeholder, variant, state, disabled, onChange, value , onClick, name,autoComplete, } =
    props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-darktext ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <input
       name = {name}
        autoComplete = {autoComplete}
        onClick ={onClick}
        disabled={disabled}
        type={type}
        id={id}
        value = {value}
        placeholder={placeholder}
        onChange = {onChange}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-4 font-bold text-White-100 block border-White-100  bg-white/0 p-3 text-sm outline-none ${
          disabled === true
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-darktext"
            : state === "error"
            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:!border-navy-white dark:text-darktext"
        }`}
      />
    </div>
  );
}

export default InputField;
