// create seperate function (isPrime) to check if numbers are prime
// 	iterate through all numbers starting from 2 to given number, since one is not a prime number
// 		the limit of the loop would be the square root of the given number
// 	if the given number is evenly divisible by the iteration, this given number is not a prime number
// 	if this number is greater than one and was not divisible with any iteration in the for loop, this number is prime

// initialize sum to 0, which will hold each prime's sum
// starting from 0, iterate through each number until the given num argument
// if the iteration isPrime,
// 	add the iteration to sum
// return sum



function isPrime(num){
  for(j=2; j<=Math.sqrt(num); j++){
    if (num % j === 0) return false;
  }
  return num > 1
}


function sumPrimes(num) {
  var sum = 0;
  for(i=0; i<=num; i++){
    if(isPrime(i)){
      sum+= i
    }
  }
  return sum;
}