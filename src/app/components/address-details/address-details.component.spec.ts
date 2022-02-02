import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsComponent } from './address-details.component';
import { AddressStore } from 'src/app/resources/address.store';
import { AddressServices } from 'src/app/resources/address.services';
import { HttpClientModule } from '@angular/common/http/http';
import { ResourcesModule } from 'src/app/resources/resources.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AddressDetailsComponent', () => {
  let component: AddressDetailsComponent;
  let fixture: ComponentFixture<AddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResourcesModule, HttpClientModule, AppRoutingModule ],
      declarations: [ AddressDetailsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsComponent);
    component = fixture.componentInstance;
    TestBed.inject(AddressStore);

    component.addressDetails = {
      title: 'Test',
      firstName: 'Nate',
      lastName: 'Hall',
      phoneNo: '412-222-2222'
    };

    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
