function myReplace(str, before, after) {
  var res = str.split(' ');
  for(i=0; i<str.length; i++){
    
    if(res[i] === before){
      var capCheck = res[i].split('');
      if(capCheck[0] === capCheck[0].toUpperCase()){
        after = after[0].toUpperCase() + after.substr(1);
        res[i] = after;
        
      }else{
        
        res[i] = after;
      }
    }   
  }
  return res.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");