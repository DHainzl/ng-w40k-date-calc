import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImperialDatePipe } from './pipes/imperial-date.pipe';
import { OldDatePipe } from './pipes/old-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImperialDatePipe,
    OldDatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
