//group tests
// describe('Strings tests');

import { message } from "./string";

//a test
// it('this should return a string');

describe('Strings tests', ()=>{
    it('this should return a string',()=>{
       const resp= message('Marco');

        expect(typeof resp).toBe('string');

    });

    it('this should return a greeting',()=>{
        const name = 'Pedro';
        const resp= message(name);
 
         expect(resp).toContain(`Hello ${name}`);
 
     });

});