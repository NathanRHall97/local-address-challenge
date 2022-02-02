import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResultsDTO } from './address.types';


@Injectable()
export class AddressServices {
    constructor(
        protected _httpClient: HttpClient
    ) {}

    // public methods

    public getAddressBook(): Observable<any> {
        return this._httpClient.get('https://randomuser.me/api/?results=100&inc=name,phone');
    }
}