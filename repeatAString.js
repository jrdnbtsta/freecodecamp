function repeatStringNumTimes(str, num) {
  var res =[];
  
  for(i=0;i<num;i++){
    res.push(str);
  }
  
  return res.join('');
}

repeatStringNumTimes("abc", 3);