function palindrome(str) {
  var reverse = str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
  var res = str.toLowerCase().replace(/[\W_]/g, '');
  
  if(reverse === res){
    return true;
  }else{
    return false;
  }

}



palindrome("0_0 (: /-\ :) 0-0");