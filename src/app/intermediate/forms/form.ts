import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginForm{

    form:FormGroup;

    constructor(fb:FormBuilder){
        this.form = fb.group({
            email: ['',[Validators.email,Validators.required]],
            password:  ['',[Validators.required]]
        });
    }

}