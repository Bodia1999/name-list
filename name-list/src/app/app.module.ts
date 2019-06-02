import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LetterToUpperCasePipe } from './pipes/letter-to-upper-case.pipe';
import { ContentComponent } from './components/content/content.component';
import { AddListComponent } from './components/add-list/add-list.component';

const appRoutes: Routes = [
  { path: '', component: AddListComponent },
  { path: 'sortedList', component: ContentComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LetterToUpperCasePipe,
    AddListComponent,
    ContentComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
