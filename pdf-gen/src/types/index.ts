export interface Form {
    id: number | string;
    name: string;
    fields: Field[]
}
  
export interface Field {
    id: number | string;
    name: string;
}