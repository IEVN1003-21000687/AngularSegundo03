import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

import { AlumnosUtl } from '../alumnos';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './eliminar.component.html',
  styles: ``,
})
export class EliminarComponent {
  dataSource: any = [];
  tem: any;
  regAlumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: '',
  };
  constructor(
    private location: Location,
    public alumnosUtl: ProyectoapiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tem = this.location.path().split('/');
    console.log('componente ' + this.tem[3]);
    this.alumnosUtl.getAlumno(parseInt(this.tem[3])).subscribe({
      next: (response) => {
        this.dataSource = response;
        console.log(this.dataSource);
        this.asignaCampos(this.dataSource);
      },
      error: (error) => console.log(error),
    });
  }

  asignaCampos(dataSource: any) {
    const alumno = dataSource.alumnos; // ← aquí viene el alumno REAL

    this.regAlumno.matricula = this.tem[3]; // la matrícula viene desde la URL
    this.regAlumno.nombre = alumno.nombre;
    this.regAlumno.apaterno = alumno.apaterno;
    this.regAlumno.amaterno = alumno.amaterno;
    this.regAlumno.correo = alumno.correo;

    console.log('Asignado:', this.regAlumno);
  }

  eliminar() {
    console.log('funcion: ' + this.tem[3]);
    this.alumnosUtl.EliminaAlumno(this.tem[3]).subscribe({
      next: () => console.log(),
      error: (e) => console.error(e),
      complete: () => console.info(),
    });

    this.router.navigate(['/utl/listaalumnos']);
  }
}
