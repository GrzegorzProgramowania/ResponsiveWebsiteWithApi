import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListItemComponent } from './film-list-item.component';

describe('FilmListItemComponent', () => {
  let component: FilmListItemComponent;
  let fixture: ComponentFixture<FilmListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
