
const randPts = [5,10,15,20];
const randVelocity = [3,4,8,12];
const randSize = [60,40,30,15];

class Moorhuhn{    
    
    constructor() {
        this.pts = 0;
        this.velocity = 0;
        this.size = 0;
        
        this.x = 0;
        this.y = 0;
    }

     reRollValues(moorhuhn) { //Every time we repspawn the moorhuhn entity, we need to reroll its values, we roll for a random nr from 0 to 3 and take the new size value out of an array
        const rand = Math.floor(Math.random() * 4);   // Returns a random integer from 0 to 3:
         moorhuhn.size = randSize[rand];
         moorhuhn.pts = randPts[rand];
         moorhuhn.velocity = randVelocity[rand];
    }

     rollForSide(moorhuhn) { //if our moorhuhn did manage to reach the other side of the screen, we first roll for the side the moorhuhn has to spawn at. Depending on that we either negate the velocity, example: spawn at x = 500 -> moves to x = 0 -> v *= (-1)
        let side = Math.floor(Math.random() * 2);
        
        const heightY = [50,90,130,170,210,250,290,330,370,400];
        moorhuhn.y = heightY[Math.floor(Math.random()*heightY.length)]
            
        if(side === 0){ //from 0 to +n -> we turn the velocity into a positive number
            moorhuhn.velocity = (moorhuhn.velocity*2)/2
            moorhuhn.x = 0;
        }else{ //from +n to 0 -> we turn the velocity into a negative number
            moorhuhn.x = 750;
            moorhuhn.velocity *= -1;
        }
        
    }

     reSpawn(moorhuhn,mainStage) {
        moorhuhn.reRollValues(moorhuhn);
        moorhuhn.rollForSide(moorhuhn,mainStage);
    }

    toString(moorhuhn){
        console.log("Size:", moorhuhn.size);
        console.log("Pts:", moorhuhn.pts);
        console.log("Velocity:", moorhuhn.velocity);
        console.log("__________");
        console.log("X:", moorhuhn.x);
        console.log("Y:", moorhuhn.y);
        console.log("____NEXT____");

    }

}
const moorhuhn = new Moorhuhn();

moorhuhn.reSpawn(moorhuhn);
moorhuhn.toString(moorhuhn);

moorhuhn.reSpawn(moorhuhn);
moorhuhn.toString(moorhuhn);

moorhuhn.reSpawn(moorhuhn);
moorhuhn.toString(moorhuhn);