import { FieldSelectOption, FieldTypes, InputProps, SelectProps, TextareaProps } from "./types";

type GetField = {
    type: FieldTypes; 
    fieldProps:  InputProps | SelectProps | TextareaProps;
}
export const getField = ({ type, fieldProps }:GetField) => {
  switch (type) {
    case "textarea": {
      return <textarea {...(fieldProps as TextareaProps)}></textarea>;
    }
    case "select": {
      const { options, ...selectProps } = fieldProps as SelectProps & {
        options: FieldSelectOption[];
      };
      return (
        <select {...selectProps}>
          {options?.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
    default: {
      return <input type={type} {...(fieldProps as InputProps)} />;
    }
  }
};
