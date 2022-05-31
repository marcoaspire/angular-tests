import { DoctorComponent } from "src/app/intermediate2/doctor/doctor.component";
import { HospitalComponent } from "src/app/intermediate2/hospital/hospital.component";
import { routes } from "./app.route";

describe( 'Main routes', ()=>{

    it( 'Route /doctor/:id should exists', () => {
        expect(routes).toContain({
            path: 'doctor/:id', component:DoctorComponent
        }); 
    });
});