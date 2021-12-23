import { delayMs } from "../util";

class Exam1Ani {
    c:string = '❤️';
    screenHeight:number;
    riseLimit:number;
    
    private printMountain( n:number ) {
        if( n <= 1 ) {
            n = 2;
        }
    
        const isOdd = n % 2 != 0;
        const totalLines = n;
        const riseCount = isOdd ? Math.ceil( n / 2 ) : Math.floor( n / 2);
        const descentCount = totalLines - riseCount;


        const topLines = Math.round(this.screenHeight - (riseCount + descentCount)) / 2;
        for( let i = 0; i < topLines; ++i ) console.log();

        /**
         * 상승하며, 출력
         */
        for( let i = 0; i < riseCount; i++) {
            console.log( "❤️".repeat(i+1) );
        } 
    
        /**
         * 하강하며 출력
         */
        for( let i = descentCount; i > 0; --i ) {
            console.log( "❤️".repeat(i) );
        }
    }

    
    async run( fps:number, screenHeight:number=30, maxRise:number=10)  {
        const fpsMs = 1000.0 / fps;

        this.screenHeight = screenHeight;
        this.riseLimit = Math.min( Math.floor( screenHeight / 2), maxRise );

        const deg2rad = Math.PI / 180;
        let sinDegree = 0.0;
        let degreePerSec = 360;
        
        while( true ) {         
            sinDegree += degreePerSec * fpsMs * 0.001;
            let sin = Math.sin( sinDegree * deg2rad );
            let sin1 = (sin + 1.0) / 2.0;
            let peek = Math.round( sin1 * this.riseLimit * 2 );
            
            console.clear();
            this.printMountain( peek );

            // console.log(peek);
            await delayMs( fpsMs );
        }
    }
}


const exam1Ani = new Exam1Ani();
exam1Ani.run( 30 );
