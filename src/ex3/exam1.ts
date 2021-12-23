namespace ex3_1 {
    export class Exam1Solver {

        nextInt(min:number=1, max:number=100) {
            return Math.round( Math.random() * (max - min) + min );
        }

        solve() {
            const set = new Set<number>();
            while( set.size < 10 ) {
                const r = this.nextInt();
                set.add( r );
            }

            [...set].forEach( (n) => { console.log( n ) } );
        }
    }
}

(new ex3_1.Exam1Solver()).solve();