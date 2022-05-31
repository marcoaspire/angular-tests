import { increment } from "./numbers";

describe("Numbers tests", ()=>{

    it("Should return 100 if number is grater than 100",()=>{
        const n=increment(500);
        expect(n).toBe(100);
    });

    it("Should return number+1 if number is lower than 100",()=>{
        const n=increment(50);
        expect(n).toBe(51);
    });

    

});
