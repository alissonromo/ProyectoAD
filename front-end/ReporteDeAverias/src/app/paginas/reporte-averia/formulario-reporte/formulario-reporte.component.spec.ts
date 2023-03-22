import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReporteComponent } from './formulario-reporte.component';

describe('FormularioReporteComponent', () => {
  let component: FormularioReporteComponent;
  let fixture: ComponentFixture<FormularioReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
