export class Zodiaco {
  nombre: string = '';
  APaterno: string = '';
  AMaterno: string = '';
  dia: number = 1;
  mes: number = 1;
  anio: number = 2000;
  sexo: string = '';
  edadNumero: number = 0;
  signoTexto: string = '';
  nombreTexto: string = '';
  anioActual: number = 2025; 


  signos: string[] = [
    'Rata','Buey','Tigre','Conejo','Dragón','Serpiente',
    'Caballo','Cabra','Mono','Gallo','Perro','Cerdo'
  ];

nombreCompleto(): string {
  this.nombreTexto = this.nombre + ' ' + this.APaterno + ' ' + this.AMaterno;
  return this.nombreTexto;
}

  edad(): number {
    this.edadNumero = this.anioActual - this.anio;
    return this.edadNumero;
  }

indice: number = 0;

signoChino(): string {
  this.indice = this.anio - 4;  
  while (this.indice < 0)  this.indice = this.indice + 12;
  while (this.indice > 11) this.indice = this.indice - 12;

  this.signoTexto = this.signos[this.indice];
  return this.signoTexto;
}


}
