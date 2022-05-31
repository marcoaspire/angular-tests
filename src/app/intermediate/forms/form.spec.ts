

import { LoginForm } from "./form";
import { FormBuilder } from "@angular/forms";


describe("Form tests", ()=>{

    let componenent: LoginForm;

    beforeAll( ()=>{
        
    });
    beforeEach( ()=>{
        componenent =new LoginForm(new FormBuilder());
        
    });


    it("Should create a form with two fields:email and password",()=>{
        
        expect(componenent.form.contains('email')).toBeTrue();
        expect(componenent.form.contains('password')).toBeTrue();
    });

    it("Email Should be required",()=>{
        const control= componenent.form.get('email');
        control?.setValue('');
        expect(control!.valid).toBeFalse();
    });

    it("Email Should be a valid email",()=>{
        const control= componenent.form.get('email');
        control?.setValue('email@d');
        expect(control!.valid).toBeTruthy();
    });

    

});
