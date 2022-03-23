import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineCardComponent } from './medicine/medicine-card/medicine-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AuthGuard } from './auth.guard';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { ProfileComponent } from './profile/profile.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';

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
    DoctorListComponent,
    MedicineListComponent,
    ProfileComponent,
    CreateUserComponent,
    MedicineAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    RadioButtonModule,
  ],
  providers: [
    AuthGuard,
    { provide: 'baseURL', useValue: 'http://localhost:8080/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
