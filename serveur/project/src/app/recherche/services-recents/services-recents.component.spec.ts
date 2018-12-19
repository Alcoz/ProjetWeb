import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRecentsComponent } from './services-recents.component';

describe('ServicesRecentsComponent', () => {
  let component: ServicesRecentsComponent;
  let fixture: ComponentFixture<ServicesRecentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesRecentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
