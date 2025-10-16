import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mult } from './ax-b';

@Component({
  selector: 'app-ax-b',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ax-b.component.html',
  styleUrls: ['./ax-b.component.css']
})
export class AxBComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number | null = null;
  detalle: string = '';

  objMult = new Mult();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      num1: new FormControl(''),
      num2: new FormControl('')
    });
  }

  calcular(): void {
    const a = Number(this.formulario.get('num1')?.value || 0);
    const b = Number(this.formulario.get('num2')?.value || 0);

    this.objMult.setValores(a, b);
    const r = this.objMult.calcular();

    this.resultado = r.valor;
    this.detalle = r.detalle;
  }

  limpiar(): void {
    this.formulario.reset();
    this.resultado = null;
    this.detalle = '';
  }
}
