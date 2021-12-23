
import { ex3_2 } from "./exam2";



namespace ex3_3 {
    export class Exam3Solver  {
        built:boolean = false;
        prime:ex3_2.Exam2Solver = new ex3_2.Exam2Solver();
        multiTable:Map<string, number> = new Map<string, number>();

        makeKey( level:number, col:number ):string {
            return `${level}x${col}`;
        }

        buildMultiplicationTable() {
            for( let level = 1; level <= 9; ++level ) {
                for( let col = 1; col <= 9; ++col ) {
                    const key = this.makeKey( level, col );
                    this.multiTable[key] = level * col;
                }
            }
        }

        build() {
            this.prime.solve();
            this.buildMultiplicationTable();
            console.clear();
            this.built = true;
        } 

        findBelowPrimeNumber( n:number ):number {
            const tmpPrimes = [...this.prime.primes];
            for( const p of tmpPrimes.reverse() ) {
                if( p < n ) return p;
            }
            return -1;
        }

        fetch( level:number, col:number ) {
            if( !this.built ) this.build();

            const key = this.makeKey( level, col );
            const value = this.multiTable[ key ];
            const belowPrime = this.findBelowPrimeNumber( value );

            const belowPrimeStr = belowPrime == -1 ? 'not found' : belowPrime.toString();
            console.log( 'output: ', value, ', below prime number: ', belowPrimeStr );
        }


        solve() {
            this.fetch( 7, 3 );
            this.fetch( 5, 9 );
            this.fetch( 2, 1 );
        }
    }
}

( new ex3_3.Exam3Solver() ).solve();