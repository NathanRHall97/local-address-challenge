import { NgModule } from '@angular/core';
import { AddressServices } from './address.services';
import { AddressStore } from './address.store';

@NgModule({
  providers: [AddressServices, AddressStore],
})
export class ResourcesModule { }
