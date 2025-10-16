import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Zodiaco } from './zodiaco';

@Component({
  
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './zodiaco.component.html',

})


export class ZodiacoComponent {
  formulario = new FormGroup({

    nombre: new FormControl(''),
    APaterno: new FormControl(''),
    AMaterno: new FormControl(''),
    dia: new FormControl(''),
    mes: new FormControl(''),
    anio: new FormControl(''),
    sexo: new FormControl(''),

  });


  nombre: string = '';
  edad: number = 0;
  signo: string = '';
  signoImg: string = '';
  obj: Zodiaco = new Zodiaco();


  SIGN_IMG: { [k: string]: string } = {
    'Rata': 'https://imgs.search.brave.com/mdDgvQzr0rl1E2k1oTyl35s1Is5Io4pF5axcgr9zWXM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzI2MjE1/NS83MjcxL2kvNDUw/L2RlcG9zaXRwaG90/b3NfNzI3MTc0ODkt/c3RvY2stcGhvdG8t/Y3VyaW91cy1ncmF5/LXJhdC1wZXQtd2Fs/a3MuanBn',
    'Buey': 'https://imgs.search.brave.com/xNXoVgRszkOFza24Jwd2dgWY_pFELFEMck5RSNkKYuw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/MS8zMS8xMC80NS9j/b3ctNzc1Nzc0MV82/NDAuanBn',
    'Tigre': 'https://imgs.search.brave.com/MdFsznjJdli3emoLQNx85p0JcU0Zc6HzpbNCPu-KFNU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmF0aW9uYWxn/ZW9ncmFwaGljbGEu/Y29tL2ZpbGVzL3N0/eWxlcy9pbWFnZV8z/MjAwL3B1YmxpYy9u/YXRpb25hbGdlb2dy/YXBoaWMyODM1ODA5/LndlYnA_dz04Mzkm/aD04Mzk',
    'Conejo': 'https://imgs.search.brave.com/zg0XPixAwKWSqRna2LJVD-0miwxs3aZ5XO47ouSQxuo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZXJk/ZWNvcmEuZXMvYmxv/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMi9tb3Rpdm9z/LXBhcmEtdGVuZXIt/Y29uZWpvLW1hc2Nv/dGEuanBnP3Y9MTcx/NzY2ODM2Mw',
    'Dragón': 'https://imgs.search.brave.com/KxsxguBAjvOOANaLSXhVPgb2-tbat3yw0rQ1-bhBvt8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jaGlu/ZXNlLWRyYWdvbi1m/cm9udC10ZW1wbGUt/MzU2MzY1NDE2Lmpw/Zw',
    'Serpiente': 'https://imgs.search.brave.com/RjMg5Dt2sIr6xNu1QDRC3k7zkUD_a_5FmJwCOesdnpQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzEzOTE3MzM4MTQt/MTVhYzI5YWMzNTQ0/P2l4bGliPXJiLTQu/MS4wJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4T0h4/OGMyVnljR2xsYm5S/bGZHVnVmREI4ZkRC/OGZId3cmZm09anBn/JnE9NjAmdz0zMDAw',
    'Caballo': 'https://imgs.search.brave.com/JviNSOCTYEy5eqaQFUJ5Sh441Vjo7Pp6HXySh6OEZdY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/Y2VyY2EtY2FiYWxs/by1wb3N0cmVfMjMt/MjE1MDY5MTE3MC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA',
    'Cabra': 'https://imgs.search.brave.com/6-D2IPM1RjflNPWaIUM67fr2oeZ544MWTLtbLH2JcWw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzMxLzk2LzY4/LzM2MF9GXzEzMzE5/NjY4Njhfb2ZsR21N/Z3RtWG14cHN2MnBm/SHF5RGc5eURjams3/bFguanBn',
    'Mono': 'https://imgs.search.brave.com/W3v5rg_dKcNTNdXGHxWAsOAGSHGd60aMJ2x_EIX2Bfo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTg2MTI4L2VzL2Zv/dG8vaG9tYnJlLWRl/LW5lZ29jaW9zLWVu/LXJvcGEtY2hpbXBh/bmMlQzMlQTkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTBh/LURrOVNBcTN1Nmlk/VnM1cEZqaDJEYzdY/a1JLSnpEUEJfa3pu/SlJhdjg9',
    'Gallo': 'https://imgs.search.brave.com/r6Nad0OlstNedglWm2xwfxnrxaLKXAeDXjhVj62uFU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvR2Fs/bG8tUE5HLUhELnBu/Zw',
    'Perro': 'https://imgs.search.brave.com/2fEU2EVPe7zR5xJfECIcnsgy7f_WH78d05Aiiv4yfIM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MTk4NzQ4OC9lcy9m/b3RvL2xpbmRvLXBl/cnJvLWRlLXBvbmVy/LXN1LWNhcmEtZW4t/c3VzLXJvZGlsbGFz/LXktZWwtaG9tYnJl/LXNvbnJpZW50ZS1k/ZS1sYXMtbWFub3Mt/cmFzY2Fyc2UtZWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV8tUXJHMVFpbXRY/UHR0dWVIZ1BTa2hj/aHdVY244RE50RWNs/VXBWOTkxQ2c9',
    'Cerdo': 'https://imgs.search.brave.com/MdFsznjJdli3emoLQNx85p0JcU0Zc6HzpbNCPu-KFNU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmF0aW9uYWxn/ZW9ncmFwaGljbGEu/Y29tL2ZpbGVzL3N0/eWxlcy9pbWFnZV8z/MjAwL3B1YmxpYy9u/YXRpb25hbGdlb2dy/YXBoaWMyODM1ODA5/LndlYnA_dz04Mzkm/aD04Mzk',
  };

  calcular(): void {
    this.obj.nombre = this.formulario.value.nombre?.toString() || '';
    this.obj.APaterno = this.formulario.value.APaterno?.toString() || '';
    this.obj.AMaterno = this.formulario.value.AMaterno?.toString() || '';
    this.obj.dia = Number(this.formulario.value.dia) || 0;
    this.obj.mes = Number(this.formulario.value.mes) || 0;
    this.obj.anio = Number(this.formulario.value.anio) || 0;
    this.obj.sexo = this.formulario.value.sexo?.toString() || '';

    this.nombre = this.obj.nombreCompleto();
    this.edad = this.obj.edad();
    this.signo = this.obj.signoChino();
    this.signoImg = this.SIGN_IMG[this.signo] || '';
  }

  limpiar(): void {
    this.formulario.reset();
    this.nombre = '';
    this.edad = 0;
    this.signo = '';
    this.signoImg = '';
  }
}
