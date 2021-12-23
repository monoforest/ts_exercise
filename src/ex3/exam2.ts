export namespace ex3_2 {
    export class Exam2Solver {
        primes:number[] = [];

        isPrimeNumber( n:number ):boolean {
            for( const p of this.primes ) {
                if( n % p == 0 ) return false;
            }
            return true;
        }

        solve() {
            for( let n = 1; n <= 100; ++n ) {
                if( n <= 1 ) continue;
                
                if( this.isPrimeNumber( n ) )  {
                    this.primes.push( n );
                }
            }

            this.primes.forEach( (p) => { console.log( p ) } );
            console.log( 'total: ', this.primes.length );
        }
    }
}

(new ex3_2.Exam2Solver()).solve();