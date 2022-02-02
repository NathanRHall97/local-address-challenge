import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent
  },
  {
    path: 'address-details',
    component: AddressDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
