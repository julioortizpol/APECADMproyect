import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilehistorydialogComponent } from './filehistorydialog.component';

describe('FilehistorydialogComponent', () => {
  let component: FilehistorydialogComponent;
  let fixture: ComponentFixture<FilehistorydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilehistorydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilehistorydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
