import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Path } from "react-hook-form";
import { FormData } from "../todo-form";
export type FieldSelectOption = {
  value: any;
  label: string;
};

export type BaseProps = {
  label: string;
  id: Path<FormData>;
  required?: boolean;
  containerClassName?: string;

};

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export type SelectProps = InputHTMLAttributes<HTMLSelectElement>;
export type TextareaProps = InputHTMLAttributes<HTMLTextAreaElement>;
export type FieldTypes =
  | "textarea"
  | "select"
  | HTMLInputTypeAttribute
  | undefined;
export type Props =
  | ({
      type?: HTMLInputTypeAttribute;
    } & InputProps &
      BaseProps)
  | ({
      type: "textarea";
    } & TextareaProps &
      BaseProps)
  | ({
      type: "select";
      options?: FieldSelectOption[];
    } & SelectProps &
      BaseProps);
