import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceanadPage } from './placeanad.page';

describe('PlaceanadPage', () => {
  let component: PlaceanadPage;
  let fixture: ComponentFixture<PlaceanadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceanadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
