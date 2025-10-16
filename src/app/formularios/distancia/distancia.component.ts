import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup;
  resultadoTexto: string = '';
  obj: Distancia = new Distancia();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl('')
    });
  }

  calcular(): void {
    this.obj.x1 = Number(this.formulario.get('x1')?.value) || 0;
    this.obj.y1 = Number(this.formulario.get('y1')?.value) || 0;
    this.obj.x2 = Number(this.formulario.get('x2')?.value) || 0;
    this.obj.y2 = Number(this.formulario.get('y2')?.value) || 0;

    this.obj.setValores(this.obj.x1, this.obj.y1, this.obj.x2, this.obj.y2);
    this.obj.calcular();

    this.resultadoTexto = 'La distancia de tus dos puntos es: ' + this.obj.resultado;
  }

  limpiar(): void {
    this.formulario.reset();
    this.resultadoTexto = '';
  }
}
