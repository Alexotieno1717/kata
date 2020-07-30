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

//Wenesday Kata
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b.
//link - https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  var result = [];
  for(var i = 0; i < a.length; i++){
    if(b.indexOf(a[i]) === -1){
      result.push(a[i])
    }
  }
  return result
}