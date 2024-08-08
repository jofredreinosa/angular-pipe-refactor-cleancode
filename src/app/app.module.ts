import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import  localeEsCl  from '@angular/common/locales/es-Cl';
import { NumberFormatPipe } from './number-format.pipe';

registerLocaleData(localeEsCl, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NumberFormatPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    NumberFormatPipe,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
