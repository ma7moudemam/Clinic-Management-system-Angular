import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineCardComponent } from './medicine/medicine-card/medicine-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, MedicineCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
  ],
  providers: [{ provide: 'baseURL', useValue: 'http://localhost:8080/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
