import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensDescriptifComponent } from './biens-descriptif.component';

describe('BiensDescriptifComponent', () => {
  let component: BiensDescriptifComponent;
  let fixture: ComponentFixture<BiensDescriptifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiensDescriptifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiensDescriptifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
