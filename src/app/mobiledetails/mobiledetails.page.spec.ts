import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobiledetailsPage } from './mobiledetails.page';

describe('MobiledetailsPage', () => {
  let component: MobiledetailsPage;
  let fixture: ComponentFixture<MobiledetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
