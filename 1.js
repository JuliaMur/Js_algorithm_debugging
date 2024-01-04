/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

const printNum = () => {
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => console.log(i), 1000)
    }
}

printNum()
