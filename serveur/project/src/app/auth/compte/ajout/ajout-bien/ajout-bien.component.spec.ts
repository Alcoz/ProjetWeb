import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBienComponent } from './ajout-bien.component';

describe('AjoutBienComponent', () => {
  let component: AjoutBienComponent;
  let fixture: ComponentFixture<AjoutBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
