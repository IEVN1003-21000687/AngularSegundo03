import { Routes } from '@angular/router';

export default [
  {
    path: 'listaalumnos',
    loadComponent: () => import('./alumnos/alumnos.component'),
  },

  {
    path: 'agregar',
    loadComponent: () => import('./agregar/agregar.component'),
  },

  {
    path: 'editar/:matricula',
    loadComponent: () =>
      import('./editar/editar.component').then((m) => m.EditarComponent),
  },

  {
    path: 'eliminar/:matricula',
    loadComponent: () =>
      import('./eliminar/eliminar.component').then((m) => m.EliminarComponent),
  },
] as Routes;
