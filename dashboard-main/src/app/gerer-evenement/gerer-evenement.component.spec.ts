import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererEvenementComponent } from './gerer-evenement.component';

describe('GererEvenementComponent', () => {
  let component: GererEvenementComponent;
  let fixture: ComponentFixture<GererEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
