import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialDesignModule { }
