import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { HeroBiosComponent } from './hero-bios/hero-bios.component';
import { FormsModule } from '@angular/forms';
import { NNotUsedComponent } from './nnot-used/nnot-used.component';
/* import { Mod1CompComponent } from './mod1-comp/mod1-comp.component'; */

@NgModule({
  declarations: [
    AppComponent,
    HeroBioComponent,
    HeroBiosComponent,
    NNotUsedComponent,
    /* Mod1CompComponent */ //not used in this component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //lazy loaded modules are not imported here, they can be preloaded
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
