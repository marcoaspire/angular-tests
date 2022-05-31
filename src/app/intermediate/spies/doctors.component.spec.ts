import { empty, from, Observable, of,throwError } from "rxjs";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsService } from "./doctors.service";



describe('MedicosComponent', () => {

    let component: DoctorsComponent;

    const service = new DoctorsService(null as any);

    beforeEach( () => {
        component=new DoctorsComponent(service);        
    });


    it('Init: Should loads doctors', () => {
        const doctors = ['doctor1','doctor2','doctor3'];

        //service,method 
        spyOn(service,'getDoctors').and.callFake(()=>{
            return from([doctors]);
        });
        component.ngOnInit();

        expect(component.doctors.length).toBeGreaterThan(0);

    });

    it('Should call to service to get a doctor', () => {
        const doctors = ['doctor1','doctor2','doctor3'];

        //service,method 
        const spy=spyOn(service,'addDoctor').and.callFake(doctor=>{
            return of({});
        });
        component.addDoctor();
        expect(spy).toHaveBeenCalled();

    });

    it('Should add a new doctor to array', () => {
        const doctor = {id:1, name:'Luis'};

        //service,method 
        const spy=spyOn(service,'addDoctor').and.returnValue( from([doctor]));
        component.addDoctor();
        expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);

    });

    it('If addDoctor fails, messageError should be the same as the service error', () => {
        const error = 'It could not add the doctor';

        //service,method 
        const spy=spyOn(service,'addDoctor').and
        .returnValue( throwError(() => new Error(error)));
        component.addDoctor();
        expect(component.mensajeError).toBe('Error: '+error);

    });


    it(' Should call to service to delete a doctor', () => {
        spyOn(window,'confirm').and.returnValue(true);

        //service,method 
        const spy=spyOn(service,'deleteDoctor').and.returnValue(of());

        component.deleteDoctor('1');
        expect(spy).toHaveBeenCalledWith('1');

    });

    it(' Should not call to service to delete a doctor', () => {
        spyOn(window,'confirm').and.returnValue(false);

        //service,method 
        const spy=spyOn(service,'deleteDoctor').and.returnValue(of());

        component.deleteDoctor('1');
        expect(spy).not.toHaveBeenCalledWith('1');

    });

});
