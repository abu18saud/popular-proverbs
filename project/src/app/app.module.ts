import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LangComponent } from './theme/components/lang/lang.component';
import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';

@NgModule({
  declarations: [
    AppComponent,
    LangComponent,
    Toolbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
