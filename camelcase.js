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