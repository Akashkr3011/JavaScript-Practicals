// Name: Akash Kumar
// Roll No.: 2510303060
// Assignment No.: 14
// Task No.: 3

let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Tick ${count}`);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
