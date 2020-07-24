export interface IForm {
    id: number | string;
    name: string;
    fields: IField[]
}
  
export interface IField {
    id: number | string;
    name: string;
    type: string;
}