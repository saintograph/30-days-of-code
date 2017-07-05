function processData(input) {
    // Enter your code here
    // process.stdout.write(input.charAt(0))
    
    const arrayKeyValues = input.split('\n');
    const newArray = String(arrayKeyValues).split(' ');
    const arrayThree = String(newArray).split(',');
    //process.stdout.write(String(arrayThree));
    const foo = new Object();
    //let counter = Number(input.charAt(0));
    const counter = Number(input.charAt(0)) + 2;
    while(counter > 1) {
        foo[arrayThree[counter]] = arrayThree[counter];
        counter - 2;
        //process.stdout.write(String(bar));
    }
    //process.stdout.write(String(foo))
    process.stdout.write(JSON.stringify(foo))
    //for (let i; i != 0; --i) {
     //    foo.[i] = function () {
             
             
         //}
    //}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
