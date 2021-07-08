import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainComponent } from './main/main.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    InfiniteScrollModule,
    // Ng2SearchPipeModule,
    FormsModule
  ]
})
export class ShopModule { }
