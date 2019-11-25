import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetaildialogComponent } from './taskdetaildialog.component';

describe('TaskdetaildialogComponent', () => {
  let component: TaskdetaildialogComponent;
  let fixture: ComponentFixture<TaskdetaildialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskdetaildialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskdetaildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
