
function largestOfFour(arr) {
  var res = [0,0,0,0];
  
  for(i=0; i<arr.length; i++){
    for(j=0; j<arr[i].length; j++){
      if(arr[i][j] > res[i]){
        res[i] = arr[i][j];
      }
    }
    
  }
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);