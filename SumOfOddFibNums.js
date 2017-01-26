// initialize prev, sum and temp vars to 0
// initialize current to 1
// while current is less than num,
// 	if current is odd
// 		add it to sum
// 	set temp to prev + curr (next curr)
// 	set prev to curr
// 	set curr to temp


function sumFibs(num) {
  var prev = 0;
  var curr = 1;
  var sum = 0;
  var temp = 0;
  
  while(curr<=num){
    if(curr%2 !== 0){
      sum += curr
    }
    temp = prev + curr
    prev = curr
    curr = temp
  }
  return(sum)
}

var test = sumFibs(75025);

console.log(test)