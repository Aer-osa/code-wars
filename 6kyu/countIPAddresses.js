//Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end){
    //Parameters 
    //start, end
    //Returns 
    //count between two numbers

  }
  //examples
  ipsBetween("150.0.0.0", "150.0.0.1") //returns 1
  ipsBetween("20.0.0.10", "20.0.1.0") // returns 246
  ipsBetween("160.0.0.0", "160.0.1.0") //returns 256
  //pseudocode
  //function takes the string, evaluates the first character and if no difference is found, adds 0 to counter,