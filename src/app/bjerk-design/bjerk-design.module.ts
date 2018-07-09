import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { BjerkHeaderComponent } from './bjerk-header/bjerk-header.component';
import { BjerkLogoComponent } from './bjerk-logo/bjerk-logo.component';
import { BjerkNavigationComponent } from './bjerk-navigation/bjerk-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    AppRoutingModule,
    LazyLoadImagesModule
  ],
  declarations: [
    BjerkHeaderComponent,
    BjerkLogoComponent,
    BjerkNavigationComponent
  ],
  exports: [
    BjerkHeaderComponent,
    BjerkLogoComponent,
    BjerkNavigationComponent,
    MaterialDesignModule
  ]
})
export class BjerkDesignModule { }
