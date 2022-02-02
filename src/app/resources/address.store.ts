import { Injectable, EventEmitter } from "@angular/core";
import { AddressServices } from './address.services';
import { IResultsDTO, Address, IAddressDTO } from './address.types';

@Injectable()
export class AddressStore {
    constructor(
        protected _addressServices: AddressServices
    ) {}

    // events

    public addressBookUpdated = new EventEmitter();

    // properties

    private _addressBook: Address[];
    private _addressDetails: Address;

    // getters and setters

    public get addressBook(): Address[] {
        return this._addressBook;
    }

    public get addressDetails(): Address {
        return this._addressDetails;
    }

    public set addressDetails(addressDetails: Address) {
        this._addressDetails = addressDetails;
    }

    // public methods

    public retrieveAddressBook(): void {
       this._addressServices.getAddressBook().subscribe((results: IResultsDTO) => {
           this._addressBook = results.results
           .map(dto => this._fromIAddressDTO(dto))
           .sort((a,b) => a.lastName > b.lastName ? 1 : -1);

           this.addressBookUpdated.emit();
       },
       () => {
           this._addressBook = [];
           this.addressBookUpdated.emit();
       });
    }

    // private methods

    private _fromIAddressDTO(dto: IAddressDTO): Address {
        const address = new Address();

        address.firstName = dto.name.first;
        address.lastName = dto.name.last;
        address.title = dto.name.title;
        address.phoneNo = dto.phone;

        return address;
    }
}