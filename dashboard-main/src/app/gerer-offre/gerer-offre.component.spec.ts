import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererOffreComponent } from './gerer-offre.component';

describe('GererOffreComponent', () => {
  let component: GererOffreComponent;
  let fixture: ComponentFixture<GererOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
