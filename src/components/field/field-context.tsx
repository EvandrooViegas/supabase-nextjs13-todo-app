"use client";
import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

export type FieldContextType = UseFormReturn;
export const FieldContext = createContext({} as FieldContextType);

type Props = {
  children: React.ReactNode;
  value: FieldContextType;
};
export const FieldContextProvider = (props: Props) => {
  const { children, value } = props;
  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
};

export const useFieldContext = () => {
    return useContext(FieldContext)
}