import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeApiComponent } from './joke-api.component';

describe('JokeApiComponent', () => {
  let component: JokeApiComponent;
  let fixture: ComponentFixture<JokeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
