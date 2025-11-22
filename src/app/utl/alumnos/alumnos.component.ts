import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';


@Component({
  selector: 'app-alumnos',
  imports: [FormsModule,RouterLink, AlumnosFilterPipe, CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})

export default class AlumnosComponent {
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = ''
  alumnoTitle!: string
  dataSource: any = [];

  constructor(public AlumnosUtl: ProyectoapiService) {}

  alumnosIric: AlumnosUtl[] = [
    {
      matricula: 21000411,
      nombre: 'Juan',
      apaterno: 'Pérez',
      amaterno: 'López',
      correo: '',
    },
    {
      matricula: 21000412,
      nombre: 'María',
      apaterno: 'González',
      amaterno: 'Rodríguez',
      correo: '',
    },
    {
      matricula: 21000413,
      nombre: 'Luis',
      apaterno: 'Hernández',
      amaterno: 'Martínez',
      correo: '',
    },
  ];

  ngOnInit(): void {
    this.AlumnosUtl.getAlumnos().subscribe({
      next: (response) => {
        this.dataSource = response;
      },
      error: (error) => console.log(error),
    });
  }
}
