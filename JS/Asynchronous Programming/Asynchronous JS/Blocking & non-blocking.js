// (first in first out) FIFO : non blocking methodology

// Non-blocking I/O (input/output) allows a single process to serve multiple requests at once. This is because the I/O operations are delegated to the system, so the process can execute the next piece of code. 
// like :


// Synchronous way :
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);


// now we will see Asynchronous way: 
console.log('Task 01')

setTimeout(() => {
    console.log('Task 02')
}, 3000);

setTimeout(() => {
    console.log('Task 03')
}, 7000);

setTimeout(() => {
    console.log('Task 04')
}, 5000);

console.log('Task 05')

// output :
// Task 01
// Task 05
// Task 02
// Task 04
// Task 03
