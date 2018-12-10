import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDebuggerComponent } from './form-debugger.component';

describe('FormDebuggerComponent', () => {
  let component: FormDebuggerComponent;
  let fixture: ComponentFixture<FormDebuggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDebuggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
