function abbrevName(name){
//Parameters
  //x beginning name
  //y ending initials
  const firstLetters = name
    .toUpperCase(name)
    .split(' ')
    .map(word => word[0])
    .join('.');

  return firstLetters;
// Returns initials  

}
//examples
//abbrevName('Sam Harris'){
//return S.H
//}

//Pseudocode
// we have a function that takes the first letter of each word and puts it in a string seperated by a period