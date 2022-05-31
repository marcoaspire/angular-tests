import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES } from '@angular/router';
import { routes } from "./advance/routes/app.route";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './intermediate/spies/doctors.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementer/incrementador.component';
import { NavbarComponent } from './advance/navbar/navbar.component';
import { DoctorRouterComponent } from './advance/doctor-router/doctor-router.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    DoctorRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
