import { Routes } from '@angular/router';
import authRoutes from './auth/features/auth.routes';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/features/auth.routes')
  },
  {
    path: 'utl',
    loadChildren: () => import('./utl/utl.routes')
  },
  {
    path: 'formularios',
    loadChildren: () => import('./formularios/formularios.routes')
  },
];
