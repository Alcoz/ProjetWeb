import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensRecentsComponent } from './biens-recents.component';

describe('BiensRecentsComponent', () => {
  let component: BiensRecentsComponent;
  let fixture: ComponentFixture<BiensRecentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiensRecentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiensRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
