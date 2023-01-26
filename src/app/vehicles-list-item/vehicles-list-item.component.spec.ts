import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListItemComponent } from './vehicles-list-item.component';

describe('VehiclesListItemComponent', () => {
  let component: VehiclesListItemComponent;
  let fixture: ComponentFixture<VehiclesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
