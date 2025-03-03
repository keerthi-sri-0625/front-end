function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        else {
            console.error("Unknown error occurred");
        }
        return NaN;
    }
}
console.log(divide(10, 2));
console.log(divide(10, 0));
