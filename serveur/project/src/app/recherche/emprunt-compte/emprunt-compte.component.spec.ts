import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpruntCompteComponent } from './emprunt-compte.component';

describe('EmpruntCompteComponent', () => {
  let component: EmpruntCompteComponent;
  let fixture: ComponentFixture<EmpruntCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpruntCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpruntCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
