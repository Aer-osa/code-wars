function generateHashtag (str) {
    //Parameters
    //string
    //Returns a string
    const mySentence = `${str}`;
    let words = mySentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    return words.join("");  
  
  }
  // generateHashtag("Do we Have a Hashtag"){
  //   return "#DoWeHaveAHashtag"
  // }
  //Pseudocode
  //function capitalizes first letters, removes spaces, adds # to beginning of string, checks if result is longer than 140 chars returning false, also return false for empty string.