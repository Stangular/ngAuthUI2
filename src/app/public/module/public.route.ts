import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }
];
export const PublicRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
