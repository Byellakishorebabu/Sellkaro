import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabletsmobilesPage } from './tabletsmobiles.page';

describe('TabletsmobilesPage', () => {
  let component: TabletsmobilesPage;
  let fixture: ComponentFixture<TabletsmobilesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletsmobilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
