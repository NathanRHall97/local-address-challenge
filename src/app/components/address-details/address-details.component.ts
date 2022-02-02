import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddressStore } from 'src/app/resources/address.store';
import { Address } from 'src/app/resources/address.types';
import { Router } from '@angular/router';

@Component({
  selector: 'address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  constructor(
    protected _addressStore: AddressStore,
    protected _router: Router
  ) { }

  // properties

  public addressDetails: Address;

  // public methods

  public ngOnInit(): void {
    if (this._addressStore.addressDetails) {
      this.addressDetails = this._addressStore.addressDetails;
    }
  }

  public onBackClicked(): void {
    this._addressStore.addressDetails = null;
    this._router.navigate(['']);
  }

}
