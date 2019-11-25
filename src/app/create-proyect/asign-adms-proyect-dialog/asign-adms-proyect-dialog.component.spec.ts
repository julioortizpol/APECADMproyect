import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignAdmsProyectDialogComponent } from './asign-adms-proyect-dialog.component';

describe('AsignAdmsProyectDialogComponent', () => {
  let component: AsignAdmsProyectDialogComponent;
  let fixture: ComponentFixture<AsignAdmsProyectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignAdmsProyectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignAdmsProyectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
