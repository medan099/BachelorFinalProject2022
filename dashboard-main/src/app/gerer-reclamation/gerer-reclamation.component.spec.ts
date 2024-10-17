import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererReclamationComponent } from './gerer-reclamation.component';

describe('GererReclamationComponent', () => {
  let component: GererReclamationComponent;
  let fixture: ComponentFixture<GererReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
