import { ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';

import { AddressCardComponent } from './address-card.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing/testing';
import { ResourcesModule } from 'src/app/resources/resources.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddressStore } from 'src/app/resources/address.store';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;
  let testBedStore: AddressStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesModule, HttpClientTestingModule, AppRoutingModule],
      declarations: [ AddressCardComponent ],
      providers: [ AddressStore ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;

    component.addressInfo = {
      title: 'Test',
      firstName: 'Nate',
      lastName: 'Hall',
      phoneNo: '412-222-2222'
    };

    TestBed.inject(AddressStore);

    TestBed.inject(AddressStore);
    testBedStore = TestBed.get(AddressStore);

    fixture.detectChanges();
  });

  it('should create address card component', () => {
    expect(component).toBeTruthy();
  });
  it('should have address store injected', 
    inject([AddressStore], (injectService: AddressStore) => {
      expect(injectService).toBe(testBedStore);
    }) 
  );
});
