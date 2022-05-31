import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should return the legend', () => {
        component.leyenda= 'Progress';
        fixture.detectChanges();

        const elem:HTMLElement=fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progress');

    });

    it('Should show value in the input', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            
            const input=fixture.debugElement.query(By.css('input')).nativeElement;
            expect(input).toBe(55);
        });
    });

    it('Should increment/decrement by 5 if the user click the botton', () => {
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click',null);
        expect(component.progreso).toBe(45);

        
        buttons[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(50);
    });

    it('Should detect progress changed after click', () => {
        //component.progreso= 'Progress';
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click',null);
        fixture.detectChanges();

        const elem:HTMLElement=fixture.debugElement.query(By.css('h3')).nativeElement;


        expect(elem.innerHTML).toContain('45');

        
    });


});
