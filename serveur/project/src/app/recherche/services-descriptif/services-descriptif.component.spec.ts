import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDescriptifComponent } from './services-descriptif.component';

describe('ServicesDescriptifComponent', () => {
  let component: ServicesDescriptifComponent;
  let fixture: ComponentFixture<ServicesDescriptifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesDescriptifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDescriptifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
