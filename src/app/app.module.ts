import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DateAdapter, MatIconRegistry} from '@angular/material';
import {RoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {DemoModule} from './content/demo.module';
import {SortablejsModule} from 'angular-sortablejs';
import {ScrollbarModule} from './core/scrollbar/scrollbar.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    DemoModule,
    SortablejsModule,
    ScrollbarModule,
  ],
  providers: [
    MatIconRegistry,
  ],
  bootstrap: [AppComponent]
})



export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('es-MX'); // DD/MM/YYYY
  }
}
