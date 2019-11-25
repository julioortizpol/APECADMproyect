import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachfiledialogComponent } from './attachfiledialog.component';

describe('AttachfiledialogComponent', () => {
  let component: AttachfiledialogComponent;
  let fixture: ComponentFixture<AttachfiledialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachfiledialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachfiledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
