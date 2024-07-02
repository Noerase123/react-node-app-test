import { InputHTMLAttributes } from "react";

export type TCustomTable = {
  data: TForm;
}

export type TField = InputHTMLAttributes<HTMLInputElement> & {
  fieldtype: 'text' | 'number' | 'dropdown';
  selection?: any[];
  children?: TField;
};

export type TForm = {
  fields: TField[]; 
}