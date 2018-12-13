import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensRechercheComponent } from './biens-recherche.component';

describe('BiensRechercheComponent', () => {
  let component: BiensRechercheComponent;
  let fixture: ComponentFixture<BiensRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiensRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiensRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
