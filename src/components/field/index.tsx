import React from "react";
import { useFieldContext } from "./field-context";
import { getField } from "./get-field";
import { Props } from "./types";

  
export default function Field(props: Props) {
  const { id, label, required, type, className, containerClassName,...rest } = props;
  const { register, formState: { errors }} = useFieldContext();

  if (!id || !label) return null;
  const fieldProps  = {
    className: `
    px-3 py-2 rounded-sm
    bg-neutral-700 text-white 
    outline outline-1 outline-neutral-500 
    focus:outline-indigo-400 focus:outline-2 
    resize-none ${className}
    `,
    ...register(id, { required }),
    ...rest,
  };

  const input = getField({ type, fieldProps })
  const errorMessage = errors[id]?.message as string;
  return (
    <fieldset className={`flex flex-col gap-1.5 ${containerClassName}`}>
      <label htmlFor={id} className="font-semibold text-xs text-zinc-400">
        {label}
      </label>
      {input}
      {errorMessage ? (
        <span className="text-[13px] text-red-600">*{errorMessage}</span>
      ) : null}
    </fieldset>
  );
}
