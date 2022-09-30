export interface IContactsTools {
    data?:IData[]
};

export interface IData {
    name: string;
    attributes:IAttributes;
    id:string
};

export interface IAttributes {
    name:string,
    phoneNumber:number;
    address:string
};
export interface IDataType{
    id:string,
    name:string,
    phoneNumber:number,
    address:string
}