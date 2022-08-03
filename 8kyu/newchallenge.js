// New challenge!!!!!!!!
//Return an array of first x multiples of the n
//call the function 
//
// PREP
//Parameters
//X base number
//N amount of multiples counter end point
//Returns
//Z array of multiples of arguments X up until argument N
function count(multiple, howManyTimes){
    let z = []
    let temp = multiple; 
    let temporaryVal = multiple
 for(let i = 1; i <= howManyTimes; i++){
    console.log('***')
    console.log("This is uspposed to happpen here ya ya")

    
    z.push(temp)
    temp += multiple
 }
 console.log(z)
    return z
}

// [1,2,3,4,5,6,7,8,9]
// [...,10]

//Examples
count(1, 10)
count(2, 5) //returns [2, 4, 6, 8, 10]
// Pseudocode:
// We're going to have a loop where we have at each 
//stage a multiply by itself until N as our stop point


0
1
2
3
4
5
6
7
8
9
[
  1, 1, 1, 1, 1,
  1, 1, 1, 1, 1
]

//Gotta use PREP
//Pair coding!!
//Communication is paramount
//Use Anki strategically
//After 25 minutes look at the answer