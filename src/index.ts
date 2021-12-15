import { delayMs, wait } from "./util";


console.log('hello');

const fpsMs = 1000.0 / 24;

async function main() {
    while( true ) {
        console.clear();

        let curTime = (new Date()).getMilliseconds().toFixed(1);
        console.log( Math.round(1000.0 / fpsMs), 'fps, ', curTime  );
        await delayMs( fpsMs );
    }
}

main();
