import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ResourcesModule } from './resources/resources.module'
import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressCardComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,
    ResourcesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
