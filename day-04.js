function Person(initialAge){
    // Add some more code to run some checks on initialAge
   let age = initialAge;
   if (age < 0) {
       process.stdout.write('Age is not valid, setting age to 0');
   };
   
   this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console

   };
   this.yearPasses=function(){
          // Increment the age of the person in here
   };
}