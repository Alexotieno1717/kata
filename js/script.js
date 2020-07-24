//Wenesday Kata practice
/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5
 below the number passed in.
*/
function solution(number){
  let total = 0;
  for (i=0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      total +=i;
    }
  }
  return total;
}
solution(23);

//Thursday Kata
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/
function createPhoneNumber(numbers){
  let phoneNumber = "(xxx) xxx-xxxx";
  
  for(i = 0; i < numbers.length; i++){
    phoneNumber = phoneNumber.replace('x', numbers[i]);
  };
  return phoneNumber
}

