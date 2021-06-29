import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ShowcartsDirective } from './showcarts.directive';

import { StoreModule } from '@ngrx/store';
import { showmenuReducer } from './redux/showmenu.reducer'

@NgModule({
  declarations: [
    AppComponent,
    ShowcartsDirective,
  ],
  imports: [
    [BrowserModule, StoreModule.forRoot({ statusMenu: showmenuReducer })],
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
