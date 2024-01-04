/* 5. Write a higher order function in JavaScript called debounce that can be used to debounce a callback function. 
The debounce function should take two arguments: the callback function to debounce and the delay time in milliseconds. 
The debounced function returned by debounce should wait until the delay time has passed before calling the callback function. 
If the debounced function is called again within the delay time, the timer should be reset and the callback function should be called after the delay time has passed. 
Your solution should be implemented in JavaScript without using any third-party libraries or frameworks. */

const debounce = (callback, timer) => {
    let timeoutId
    
    return function() {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(callback, timer)
    }
}

//This is the test code for the debounce function
for (let i = 0; i < 5; i++) {
    debounce(() => console.log("this should print out only once"), 1000)
}