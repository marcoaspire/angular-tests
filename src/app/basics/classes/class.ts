export class Player{
    hp:number;

    constructor(){
        this.hp=100;
    }

    getAttack(attack:number){
        if (attack>= this.hp)
        {
            this.hp=0;
        }else{
            
            this.hp=this.hp-attack;
        }
        return this.hp;
    }
}