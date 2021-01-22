import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { startTestModule } from './start-test/start-test.module';
import { ResultModule } from './result/result.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AdminModule,
    startTestModule,
    ResultModule
  ],
})
export class HomeModule { }
