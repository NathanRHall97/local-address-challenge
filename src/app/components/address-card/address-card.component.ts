import { Component, OnInit, Input } from '@angular/core';
import { Address } from 'src/app/resources/address.types';
import { Router } from '@angular/router';
import { AddressStore } from 'src/app/resources/address.store';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  constructor(
    protected _addressStore: AddressStore,
    protected _router: Router
  ) { }

  // properties

  @Input() public addressInfo: Address;

  // public methods

  public ngOnInit(): void {
  }

  public onCardClicked(): void {
    this._addressStore.addressDetails= this.addressInfo;
    this._router.navigate(['address-details']);
  }

}
