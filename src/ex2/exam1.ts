
const c = '❤️';


class Exam1Solve {
    c:string = '❤️';

    private printMountain( n:number ) {
        if( n <= 2 ) {
            n = 3;
        }
    
        const isOdd = n % 2 != 0;
        const totalLines = n;
        const riseCount = isOdd ? Math.ceil( n / 2 ) : Math.floor( n / 2);
        const descentCount = totalLines - riseCount;
    
        console.log();
        console.log(`mountain: ${n}`);
    
        /**
         * 상승하며, 출력
         */
        for( let i = 0; i < riseCount; i++) {
            console.log( this.c.repeat(i+1) );
        } 
    
        /**
         * 하강하며 출력
         */
        for( let i = descentCount; i > 0; --i ) {
            console.log( this.c.repeat(i) );
        }
        console.log(`fin ${n}`);
        console.log();
    }

    
    solve( input:number[] ) {
        input.forEach( (n) => this.printMountain(n) );
    }

    
}

(new Exam1Solve()).solve( [2, 4, 5, 9, 15, 30] );
