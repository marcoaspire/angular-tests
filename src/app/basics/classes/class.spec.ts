import { Player } from "./class";


describe("Array tests", ()=>{

    let player = new Player();

    beforeAll( ()=>{
        
    });
    beforeEach( ()=>{
        player =new Player();
        
    });

    afterAll( ()=>{
       
        
    });
    afterEach( ()=>{
        player.hp=100;
        
    });




    it("Should return hp 80, if it recive attack 20",()=>{
        const resp = player.getAttack(20);
        expect(resp).toBe(80);
    });

    it("Should return hp 80, if it recive attack 20",()=>{
        const resp = player.getAttack(50);
        expect(resp).toBe(50);
    });

    it("Should return hp 0, if it recive attack 100",()=>{
        const resp = player.getAttack(150);
        expect(resp).toBe(0);
    });


    

});
