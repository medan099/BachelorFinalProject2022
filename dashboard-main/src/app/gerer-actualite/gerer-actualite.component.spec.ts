import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererActualiteComponent } from './gerer-actualite.component';

describe('GererActualiteComponent', () => {
  let component: GererActualiteComponent;
  let fixture: ComponentFixture<GererActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
