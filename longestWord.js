function findLongestWord(str) {
  var array = str.split(' ');
  var res = '';
  
  for(i=0; i<array.length; i ++){
    if(array[i].length > res.length){
      res = array[i];
    }
  }
  return res.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");