import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthComponent } from './full-width.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FullWidthComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [FullWidthComponent]
})
export class FullWidthModule { }
