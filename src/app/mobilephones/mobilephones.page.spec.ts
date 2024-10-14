import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilephonesPage } from './mobilephones.page';

describe('MobilephonesPage', () => {
  let component: MobilephonesPage;
  let fixture: ComponentFixture<MobilephonesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilephonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
