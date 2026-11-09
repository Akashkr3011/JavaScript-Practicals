// Name: Akash Kumar
// Roll No.: 2510303060
// Assignment No.: 14
// Task No.: 2

const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");
