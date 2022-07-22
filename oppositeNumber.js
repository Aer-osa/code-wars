// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    //Parameters
      //number, oppositeNumber
    //Returns
      //oppositeNumber
      if(number > 0){
        return -Math.abs(number)
      }else{
        return Math.abs(number)
      }
    }
    
    //Examples
    // opposite(1){
    //   return -1
    // }
    //psuedocode
      //When we give the function a number, the function reverses the operator from positive to negative as is the case