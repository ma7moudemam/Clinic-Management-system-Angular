import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:"full" },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'doctor-list', component: DoctorListComponent},
  { path: 'medicine', component: MedicineListComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
