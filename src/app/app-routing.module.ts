import { CreateUserComponent } from './create-user/create-user.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { ProfileComponent } from './profile/profile.component';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';
import { ReportComponent } from './report/report.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverDoctorComponent } from './discover-doctor/discover-doctor.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'doctor-list', component: DoctorListComponent },
  {path:"clinics",component:DiscoverComponent},
  {path:"user",component:DiscoverDoctorComponent},
  { path: 'medicine', component: MedicineListComponent },
  { path: 'medicine/add', component: MedicineAddComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'create-user/:id', component: CreateUserComponent },
<<<<<<< HEAD
  {path:'appointment', component: AppointmentListComponent},
=======
  { path: 'report', component: ReportComponent },
>>>>>>> 31b63da86b098c07e8c24692b8202344e21fe1cc
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
