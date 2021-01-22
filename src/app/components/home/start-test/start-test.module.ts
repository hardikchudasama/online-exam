import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartTestComponent } from './start-test.component';
import { StartTestRoutingModule } from './start-test-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [StartTestComponent],
  exports: [StartTestComponent],
  imports: [
    CommonModule,
    StartTestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule
  ]
})
export class startTestModule { }
