import { loggedUser } from "./booleans";


describe("Boolean tests", ()=>{

    it("Should return true",()=>{
        const n=loggedUser();
        expect(n).toBeTrue();
    });

    

});
