
import { Routes } from '@angular/router';
import { DoctorComponent } from 'src/app/intermediate2/doctor/doctor.component';
import { HospitalComponent } from 'src/app/intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from 'src/app/intermediate2/incrementer/incrementador.component';
export const routes:Routes = [
    { path: 'hospital', component:HospitalComponent},
    { path: 'doctor/:id', component:DoctorComponent},
    { path: '**', component: IncrementadorComponent}


]