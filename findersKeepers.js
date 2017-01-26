//loop between each element in given array
  //if passing the number in the array's current iteration through the function results in true,
    //return the number in the array's index



function findElement(arr, func) {
  for(i=0; i<arr.length; i++){
    if(func(arr[i])) return arr[i]
  }

}

var test = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

console.log(test)