export class Mult {
  num1: number = 0;
  num2: number = 0;

  setValores(a: number, b: number): void {
    this.num1 = a;
    this.num2 = b;
  }

  calcular() {
    let total = 0;
    const partes: string[] = [];

    for (let i = 0; i < this.num2; i++) {
      total += this.num1;
      partes.push(String(this.num1));
    }

    const detalle = `La suma es de ${
      partes.length ? partes.join('+') : '0'
    }=${total}`;
    return { valor: total, detalle };
  }
}
