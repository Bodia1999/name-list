import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LetterToUpperCasePipe } from './pipes/letter-to-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LetterToUpperCasePipe
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
