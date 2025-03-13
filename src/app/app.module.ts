import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulatedEmulatedComponent } from './encapsulated-emulated/encapsulated-emulated.component';
import { EncapsulatedNoneComponent } from './encapsulated-none/encapsulated-none.component';
import { EncapsulatedShadowDomComponent } from './encapsulated-shadow-dom/encapsulated-shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulatedEmulatedComponent,
    EncapsulatedNoneComponent,
    EncapsulatedShadowDomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
