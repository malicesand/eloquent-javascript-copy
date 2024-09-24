
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
// I - number 
// O - 'size of triangle' to log
// C - use while loop 
function triangles(number) {
  // initialize count variable with a number value
  let count = 0;
  // apply while loop that repeats when count is less than input number
  while (count < number) {
    // each iteration logs '#' 'count number' of times to console
    console.log('#'.repeat(count + 1));
    count++ // count increases by one on each loop
  }
  
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

// I - number range (inclusive)
// O - log message for each number in range
// C - message content depends on divisibilty of number by 3 and 5

function fizzBuzz(start, end) {
  // initialize count variable assign it to value of start
  let count = start
  // apply for loop takes in each number between start and end (inclusive)
  while (count <= end) {
    // if current number is divisible by 3 and 5
    if (count % 3 === 0 && count % 5 === 0) {
      // log 'fizzbuzz' to console
      console.log('fizzbuzz')
    } // else, if current number is only divisible by 3
    else if (count % 3 === 0) {
      // log 'fizz' to console
      console.log('fizz')
    }  // else, if current number is only divisible by 5
    else if (count % 5 === 0) {
      // log 'buzz' to console
      console.log('buzz')
    } else { 
      // else, log the number
      console.log(count);
    } // increase count by 1 on each iteration
    count++;
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/
// I - number representing 'size' of chessboard (x rows, x columns, every other cell blank)
// O - visual representation of chessboard as single multi line string 
function drawChessboard(x) {
  // initialize count variable and assign it to 0
  let count = 0;
  // declare variable to contain output and assign to empty string
  var chessBoard = '';
  // apply whole loop that iterates so long as count is less than input (x)
  while (count < x) {
    // initialize conditional chains to create chess board pattern
    // 1st conditional chain is for odd numbers executes for odd numbers
    if (x % 2 !== 0) {
      // initialize inner conditional chain for odd x
      if (count % 2 === 0) { // creates every other line structure
        chessBoard = chessBoard.concat(' ' + ('# ').repeat(x / 2) + '\n'); // creates grid 
      }
      if (count % 2 !== 0) {
        chessBoard = chessBoard.concat('#' + (' #').repeat(x / 2) + '\n');
      }
    }
    if (x % 2 === 0) {
      if (count % 2 === 0) {
        chessBoard = chessBoard.concat((' #').repeat(x / 2) + '\n');
      }
      if (count % 2 !== 0) {
        chessBoard = chessBoard.concat(('# ').repeat(x / 2) + '\n');
      }
    }
  count++
  }
  console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}