function camelCase(str) {
    //splitStr will be an array
    var splitStr = [];
    var result = "";
    
    splitStr = str.split(" ");
    
    //Capitalize first letter of words starting from the second one
    for(var i = 0; i < splitStr.length; i++){
    
      //first word
      if (i===0) {
        //Good practice to lowercase the first letter regardless of input
        //splitStr[i][0] --> [i] first word, [0] first letter of the first word --> "h" in hello
        result = splitStr[i][0].toLowerCase() + splitStr[i].slice(1);
      }
    
      else {
        //rest can proceed as before
        result = result + splitStr[i][0].toUpperCase() + splitStr[i].slice(1);    
      }
  
    }
    return result;
    }
  
  console.log(camelCase("hello there people"));
  
  
  //the split method allows us to split a string into an array 
  let str = "Hi there how are you?"
  console.log(str.split(" "));


  function camelCase(sentence){
    let result = ''; //make an empty string for the loop to stack the words
    
    let stringArray = []; //make an empty array that contains every word in an array 
    stringArray = sentence.split(" "); 
    
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