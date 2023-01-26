import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsListItemComponent } from './starships-list-item.component';

describe('StarshipsListItemComponent', () => {
  let component: StarshipsListItemComponent;
  let fixture: ComponentFixture<StarshipsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
