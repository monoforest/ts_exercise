export function delayMs( ms:number ) {
    return new Promise( resolve => setTimeout( resolve, ms) );
}

export async function wait( check:Function ) {
    while( true ) {
        if( check() == true ) return ;
        await delayMs(1);
    }
}