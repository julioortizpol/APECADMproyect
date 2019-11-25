import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectdetailinfoComponent } from './proyectdetailinfo.component';

describe('ProyectdetailinfoComponent', () => {
  let component: ProyectdetailinfoComponent;
  let fixture: ComponentFixture<ProyectdetailinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectdetailinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectdetailinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
