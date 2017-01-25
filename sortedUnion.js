//create an output arr to hold answers
//create temp arr that would combined all arrays given as arguments
//iterate through the number of arguments
//iterate through each element of each given array and push into tempArr
//iterate through tempArr
  //if the current int is not in output arr, push into it
//return output


function uniteUnique(arr) {
  var output = []
  var tempArr = []
  
  for(i=0; i<arguments.length; i++){
    for(j=0; j<arguments[i].length; j++){
      tempArr.push(arguments[i][j])
    }
  }
  
  for(i=0; i<tempArr.length; i++){
    if(output.indexOf(tempArr[i]) === -1){
      output.push(tempArr[i])
    }
  }
  return output
}

var res = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

console.log(res)