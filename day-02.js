function main(mealCost, tipPercent, taxPercent) {
    // Write your code here
    const totalTipTax = tipPercent + taxPercent;
    const foo = mealCost * totalTipTax;
    const bar = foo / 100;
    // function round(n){ return Math.round(Number(n)); }
    const result = bar + mealCost;
    // console.log(Math.round(result);
    // Use console.log() to print to stdout
    console.log(`The total meal cost is ${Math.round(result)} dollars.`);
}