import { IncrementadorComponent } from "./incrementador.component"

describe('IncrementadorComponent unit', ()=>{

    let component:IncrementadorComponent;
    beforeEach(()=>component= new IncrementadorComponent);

    it ('Progress value should be less or equal than 100 ',()=>{
        component.progreso = 100;
        component.cambiarValor(5);
        expect(component.progreso).toBe(100);
    })
})