import { ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';

import { AddressBookComponent } from './address-book.component';
import { AddressStore } from 'src/app/resources/address.store';
import { AddressServices } from 'src/app/resources/address.services';
import { ResourcesModule } from 'src/app/resources/resources.module';
import { HttpClientModule, HttpClient } from '@angular/common/http/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;
  let testBedStore: AddressStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResourcesModule, HttpClientTestingModule, AppRoutingModule ],
      declarations: [ AddressBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;

    TestBed.inject(AddressStore);
    testBedStore = TestBed.get(AddressStore);

    fixture.detectChanges();
  });

  it('should create address book component', () => {
    expect(component).toBeTruthy();
  });
  it('should have address store injected', 
    inject([AddressStore], (injectService: AddressStore) => {
      expect(injectService).toBe(testBedStore);
    }) 
  );
});
