//create alphabet array
//split str into an array, one element for each letter
//iterate through each element
//if the iteration matches a char on the alphabet array
  //if the index + 1 of str array !== the index of the same character in the alphabet array
     //return the index of the str + 1 in alphabet array


function fearNotLetter(str) {
  
  var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  str = str.split('')

  for(i=0; i<str.length-1; i++){

    if(alpha[alpha.indexOf(str[i])+1] !== str[i+1]){
      return alpha[alpha.indexOf(str[i])+1]
    }
    
  }
  
  return undefined;
}

var res = fearNotLetter(("yz"));
console.log(res)