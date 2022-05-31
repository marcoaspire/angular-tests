import { getRobots } from "./arrays";



describe("Array tests", ()=>{

    it("Should return at least 4 robots",()=>{
        const n=getRobots();
        expect(n.length).toBeGreaterThanOrEqual(4);
    });

    it("Should exists Megaman and CyberMan",()=>{
        const n=getRobots();
        expect(n).toContain('Megaman');
        expect(n).toContain('CyberMan');
    });

    

});
