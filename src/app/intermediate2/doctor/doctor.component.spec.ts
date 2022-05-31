import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DoctorComponent } from "./doctor.component";
import { DoctorService } from "./doctor.service";

describe('Doctor component', () =>{
    let component: DoctorComponent;
    let fixure: ComponentFixture<DoctorComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [DoctorComponent],
            imports:[HttpClientModule],
            providers:[DoctorService]
        });

        fixure=TestBed.createComponent(DoctorComponent);
        component=fixure.componentInstance;

    });

    it ('Component should be created',()=>{
        expect(component).toBeTruthy();
    });

    it ("Should return doctor's name ",()=>{
        const name='Marco';
        const res= component.sayHello(name);
        expect(res).toContain(name);
    });

});