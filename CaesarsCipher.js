function rot13(str) { // LBH QVQ VG!
  var arr = str.split('');
  var res = [];
  var alpha = ["A","B","C",'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
  
  for(i=0; i<arr.length; i++){
    
    if(alpha.indexOf(arr[i])===-1){
      
      res.push(arr[i]);
      
    }else{
      for(j=0; j<alpha.length; j++){
        if(arr[i] === alpha[j]){
          res.push(alpha[j+13]);
        }
      }
  
    }  
    
  }
  
  
  
  return res.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");