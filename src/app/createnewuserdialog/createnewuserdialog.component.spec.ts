import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewuserdialogComponent } from './createnewuserdialog.component';

describe('CreatenewuserdialogComponent', () => {
  let component: CreatenewuserdialogComponent;
  let fixture: ComponentFixture<CreatenewuserdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewuserdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewuserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
