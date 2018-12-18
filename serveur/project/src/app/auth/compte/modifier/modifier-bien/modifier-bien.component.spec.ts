import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBienComponent } from './modifier-bien.component';

describe('ModifierBienComponent', () => {
  let component: ModifierBienComponent;
  let fixture: ComponentFixture<ModifierBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
