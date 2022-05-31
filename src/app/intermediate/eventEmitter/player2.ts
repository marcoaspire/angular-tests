import { EventEmitter } from "@angular/core";


export class Player2{
    hp:number;
    hpChange= new EventEmitter<number>();

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
        this.hpChange.emit(this.hp);
    }
}