import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddressStore } from 'src/app/resources/address.store';
import { Address } from 'src/app/resources/address.types';
@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnDestroy, OnInit {

  constructor(
    protected _addressStore: AddressStore
  ) { }

  // subscription

  private _addressBookUpdatedSubscription: Subscription;

  // properties

  public addressBook: Address[];

  // public methods

  public ngOnDestroy(): void {
    this._addressBookUpdatedSubscription.unsubscribe();
  }

  public ngOnInit(): void {
    this._addressBookUpdatedSubscription = this._addressStore.addressBookUpdated.subscribe(() => {
      this.addressBook = this._addressStore.addressBook;
    })

    if (this._addressStore.addressBook) {
      this.addressBook = this._addressStore.addressBook;
    } else {
      this._addressStore.retrieveAddressBook();
    }
  }

}
