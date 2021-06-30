import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
