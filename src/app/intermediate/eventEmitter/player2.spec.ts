
import { Player2 } from "./player2";


describe("Player2 emit", ()=>{

    let player: Player2;

    beforeAll( ()=>{
        
    });
    beforeEach( ()=>{
        player =new Player2();
        
    });

    afterAll( ()=>{
       
        
    });
    afterEach( ()=>{
        player.hp=100;
        
    });




    it("Should return an event when it get attacked",()=>{
        let newHP=0;
        player.hpChange.subscribe(hp => newHP=hp );
        player.getAttack(1000);
        expect(newHP).toBe(0);
    });

    
    it("Should return an event when it get attacked and it should be alive if the attack is less than 100",()=>{
        let newHP=0;
        player.hpChange.subscribe(hp => newHP=hp );
        player.getAttack(50);
        expect(newHP).toBe(50);
    });



    

});
