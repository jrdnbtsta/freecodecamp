
// create an array for all vowels
// split the string into an array with each letter as an element
// if the first letter is in the vowel array, push 'way' at the end
// if it is not, then push the letter + 'ay' at the end and shift the letters
// return the joined str

function translatePigLatin(str) {
  
  var vowels = ['a','e','i','o','u']
  
  str = str.split('')

  if(vowels.indexOf(str[0]) === -1 && vowels.indexOf(str[1]) === -1){
    str.push(str[0])
    str.push(str[1] + 'ay')
    str.shift()
    str.shift()
    console.log('check')
  }else if(vowels.indexOf(str[0]) === -1){
    str.push(str[0] + 'ay')
    str.shift();
  }else{
    str.push('way')
  }
  
  return str.join('');
}

var res = translatePigLatin("carey");

console.log(res);