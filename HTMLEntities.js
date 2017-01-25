//split str into an array seperated for each letter
//create two arrays, 1 that looks for &, <, >, " and & in the string
//the other for storing the corresponding HTML string
//iterate through the each letter of the given string
//if the current iteration is in the first key array, replace it with the corresponding HMTL string
//return string



function convertHTML(str) {
  str = str.split('')
  var strChars = ['&','>','<','"',"'"]
  var HTMLChars = ['&amp;','&gt;','&lt;','&quot;','&apos;']
  
  for(i=0; i<str.length; i++){
    if(strChars.indexOf(str[i]) !== -1){
      str[i] = HTMLChars[strChars.indexOf(str[i])]
    }
  }
  return str.join('');
}

var test = convertHTML("abc");
console.log(test)