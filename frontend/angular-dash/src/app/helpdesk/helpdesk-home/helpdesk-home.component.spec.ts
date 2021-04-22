import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskHomeComponent } from './helpdesk-home.component';

describe('HelpdeskHomeComponent', () => {
  let component: HelpdeskHomeComponent;
  let fixture: ComponentFixture<HelpdeskHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
