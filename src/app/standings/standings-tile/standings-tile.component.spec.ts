import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTileComponent } from './standings-tile.component';

describe('StandingsTileComponent', () => {
  let component: StandingsTileComponent;
  let fixture: ComponentFixture<StandingsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
