import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ZodiacoComponent,
    DistanciaComponent,
    AxBComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularSegundo03';
  ngOnInit(): void {
    initFlowbite();
  }
}
