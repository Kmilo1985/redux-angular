import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyComponent } from './lazy-loaded/lazy/lazy.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    HijoComponent,
    NietoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
