/* 6. Create a function called cacheFunc that takes another function as an argument and returns a new function. 
The new function should cache the result of the original function for each set of arguments that it's called with. 
If the new function is called with the same arguments again, it should return the cached result, instead of calling the original function again. 
The new function should have a cache property that stores the cached results. */

const cacheFunc = (callback) => {
    const cache = {} //stores the cached results here

    return (...args) => {
        const key = JSON.stringify(args) // Using JSON.stringity to convert the arg. into a string

        if (cache.hasOwnProperty(key)) { // this method is used to check if the cache object has a property with the given key
            return cache[key]
        } else {
            const result = callback(...args)
            cache[key] = result
            return result
        }
    }
}

//This is the test code for cacheFunc
const addition = (a, b) => {
    console.log("addition of " + a + " and " + b)
    return a + b
}
const subtraction = (a, b) => {
    console.log("subtraction of " + a + " and " + b)
    return a - b
}
const cacheAddition = cacheFunc(addition)
const cacheSubtraction = cacheFunc(subtraction)
console.log(cacheAddition(10, 5)) // should print out: "addition of 10 and 5" and "15"
console.log(cacheAddition(10, 5)) // should print out: "15"
console.log(cacheAddition(10, 9)) // should print out: "addition of 10 and 9" and "19"
console.log(cacheAddition(10, 9)) // should print out: "19"
console.log(cacheSubtraction(10, 5)) // should print out: "subtraction of 10 and 5" and "5"
console.log(cacheSubtraction(10, 5)) // should print out: "5"