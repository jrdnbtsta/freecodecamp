//sort arr to ensure that the smallest value is in its first index
//initialize commMult to 0
//initialize multiple to arr[1] (largest number)
//while commMult = 0, iterate through the range of numbers, arr[0] to arr[1]
  //if the multiple is not divisible by two (odd) for any of these iterations, break loop
  //if the loop has gone through the entire loop, and the iteration is now on the last,
    // this current multiple is the lease common multiple (commMult = multiple)
  //otherwise, multiple += arr[1], since the next possible multiple could only be what is divisible by the largest number
//return commMult

function smallestCommons(arr) {
  var commMult = 0
  arr = arr.sort(function(a,b){
    return a-b
  });
  var multiple = arr[1]
  
  while (commMult === 0){
    for(i=arr[0]; i<=arr[1]; i++){
      if(multiple % i !== 0){
        break;
      }
      if(i === arr[1]){
         commMult = multiple
      }
      
    }
    multiple += arr[1]
  }
  return commMult
}


var test = smallestCommons([5,1]);
console.log(test)