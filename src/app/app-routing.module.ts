import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';
import { DefaultComponent } from './layout/default/default.component';
import { FullWidthComponent } from './layout/full-width/full-width.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { PagenotfoundComponent } from './shared/pages/error/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      }]
  },
  {
    path: '',
    component: FullWidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
