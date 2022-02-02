export interface IResultsDTO {
    results: IAddressDTO[];
}

export interface IAddressDTO {
    name: {
        first: string;
        last: string;
        title: string;
    }
    phone: string;
}

export class Address {
    public firstName: string;
    public lastName: string;
    public title: string;
    public phoneNo: string;
}