import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensCompteComponent } from './biens-compte.component';

describe('BiensCompteComponent', () => {
  let component: BiensCompteComponent;
  let fixture: ComponentFixture<BiensCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiensCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiensCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
