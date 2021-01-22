import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/helper/auth.guard';
import { Role } from 'src/app/models';
import { HomeComponent } from './home.component';
import { StartTestComponent } from './start-test/start-test.component';

const chieldroutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'start-test',
    component: StartTestComponent,
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { roles: [Role.Admin] }
  },
  { path: 'result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) }
];

@NgModule({
  imports: [RouterModule.forChild(chieldroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
