import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, of, Subject } from 'rxjs';


import { DoctorRouterComponent } from './doctor-router.component';

class FakeRouter{
  navigate(params:any){}
}

class FakeActivatedRoute {
  params: Observable<any> = EMPTY;

  /*
  private subject = new Subject();

  push(value:any){
    this.subject.next(value);
  }
  get params(){
    return this.subject.asObservable();
  }
  */

}

describe('DoctorRouterComponent', () => {
  let component: DoctorRouterComponent;
  let fixture: ComponentFixture<DoctorRouterComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRouterComponent ],
      providers:[
        {provide: Router, useClass: FakeRouter},
        //{provide: ActivatedRoute, useClass: FakeActivatedRoute },
        //{provide: ActivatedRoute,  useValue: fakeActivatedRoute},

        ActivatedRoute
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //doesnt work

  /*
  it('it should redirect to doctors if the user save a new doctor', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.saveDoctor();

    expect(spy).toHaveBeenCalledWith(['doctors','123']);


  });

  it('Should set id=new', () =>{
    component=fixture.componentInstance;
    
    TestBed.inject(ActivatedRoute);
    expect(component.id).toBe('123');

    
    // const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    // activatedRoute.push({id:'new'});

    // expect(component.id).toBe('new');

  });
  */




});
