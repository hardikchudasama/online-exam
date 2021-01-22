import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartTestComponent } from './start-test.component';

const routes: Routes = [{ path: '', component: StartTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartTestRoutingModule { }
