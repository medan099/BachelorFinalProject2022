import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererCandidatureComponent } from './gerer-candidature.component';

describe('GererCandidatureComponent', () => {
  let component: GererCandidatureComponent;
  let fixture: ComponentFixture<GererCandidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererCandidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
