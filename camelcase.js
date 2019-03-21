function camelCase(sentence){
    let result = ''; //make an empty string for the loop to stack the words
    
    let stringArray = []; //make an empty array 
    stringArray = sentence.split(" "); //separates every word that has a space between 
    
    for (let i= 0;i < stringArray.length; i++){
      if (i === 0){
        result = stringArray[i][0].toLowerCase() + stringArray[i].slice(1);
      } else {
        result = result + stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
      }
    }
    return result;
    
  };
  
  
  console.log(camelCase('Hello there tiny people')); 
  //result: helloThereTinyPeople 