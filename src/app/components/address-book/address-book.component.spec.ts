import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from './address-book.component';
import { AddressStore } from 'src/app/resources/address.store';
import { AddressServices } from 'src/app/resources/address.services';
import { ResourcesModule } from 'src/app/resources/resources.module';
import { HttpClientModule, HttpClient } from '@angular/common/http/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResourcesModule, HttpClientTestingModule ],
      declarations: [ AddressBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an address book', () => {
    expect(component.addressBook).toBeGreaterThan(0);
  })
});
