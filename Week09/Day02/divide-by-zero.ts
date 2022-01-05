
// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function divideTen(divider: number) {
    try {
        if (divider === 0) {
            throw new Error();
        } else {
            console.log(10 / divider);
        }
    } catch (error) {
        console.error("fail");
    }
}

divideTen(0);