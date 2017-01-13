function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var index = 0;
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  
  arr.sort(function(a,b){
           
        return a-b;   
     });
  
  if(args > arr[arr.length-1]){
    return arr.length;
  }else{
    for(i=0; i<arr.length; i++)
    if(args > arr[i]){
      index += 1;
    }else{
      return index;
    }
  }
}

getIndexToIns([2, 5, 10], 15);