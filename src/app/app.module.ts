import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineCardComponent } from './medicine/medicine-card/medicine-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicineCardComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MedicineCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: 'baseURL', useValue: 'http://localhost:8080/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
