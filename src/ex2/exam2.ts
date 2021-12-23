class Exam2Solve {
    c:string = '❤️';

    printDiamond( n:number ) {
        n = Math.max(1, n);
        n = n % 2 == 0 ? n + 1 : n;

        let lineCount = n;
        let riseCount = Math.floor( lineCount / 2 );
        let length = 1;
        let maxRise = 1 + riseCount * 2;
        console.log( `max rise: ${maxRise}` );

        for( let i = 0; i < lineCount; ++i ){
            let offsetCount = Math.round( maxRise - length / 2 );
            console.log( ' '.repeat(offsetCount) + this.c.repeat(length) );

            if( i < riseCount ) {
                length += 2;
            } else {
                length -= 2;
            }
        }       

        console.log( `diamond: ${n}` );
        console.log();
    }

    solve(input:number[]) {
        input.forEach( (n) => this.printDiamond( n ) );
    }
}


(new Exam2Solve()).solve( [3, 5, 8, 16] );
