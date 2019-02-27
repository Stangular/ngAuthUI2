import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    //path: 'Auth', loadChildren: './auth/modules/auth.module'
    path: 'public', loadChildren: './public/module/public.module'

  }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
