import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCardComponent } from './address-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing/testing';
import { ResourcesModule } from 'src/app/resources/resources.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddressStore } from 'src/app/resources/address.store';

describe('AddressCardComponent', () => {
  let component: AddressCardComponent;
  let fixture: ComponentFixture<AddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppRoutingModule],
      declarations: [ AddressCardComponent ],
      providers: [ AddressStore ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
