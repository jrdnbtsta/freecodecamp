//split the given string into an array, one element for each letter
//create two arrays, one with the given letters
//one with the corresponding letters
//iterate through each element of the str array
//if the letter is in the given letters array, it and its corresponding array into a temp
//push temp array as a whole into the final array

function pairElement(str) {
  str = str.split('')
  var output = [];
  var strChar = ['G','C','A','T']
  var corrChar = ['C','G','T','A']
  
  for(i=0; i<str.length; i++){
    var tempArr = []
    if(strChar.indexOf(str[i]) !== -1){
      tempArr.push(str[i])
      tempArr.push(corrChar[strChar.indexOf(str[i])])
      
      output.push(tempArr)
    }
  }
  
  return output;
}

var res = pairElement("ATCGA");

console.log(res)