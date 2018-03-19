import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresTileComponent } from './scores-tile.component';

describe('ScoresTileComponent', () => {
  let component: ScoresTileComponent;
  let fixture: ComponentFixture<ScoresTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
