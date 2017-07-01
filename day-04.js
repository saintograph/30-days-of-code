function Person(initialAge){
    // Add some more code to run some checks on initialAge
   if (initialAge < 0) {
       process.stdout.write('Age is not valid, setting age to 0.' + '\n');
       initialAge = 0;
   };
   
   this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
        if (initialAge < 13) process.stdout.write('You are young.' + '\n');
        if (initialAge < 18 && initialAge >= 13) process.stdout.write('You are a teenager.' + '\n');
        if (initialAge >= 18) process.stdout.write('You are old.' + '\n');
   };
   this.yearPasses=function(){
          // Increment the age of the person in here
        ++initialAge
   };
}