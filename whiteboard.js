'use strict';

// var arr = [1, 0, 3, 5, 3, 4, 5, 6, 2, 9];
var arr = [0, 0, 0, 0, 0, 0, 0, 0];

function hasIncrementingSequence(arr) {
    var count = 0;
    var isIncrementing = false;

    for(var i = 1; i < arr.length; i++) {
      console.log(arr[i-1] + ' compared to ' + arr[i]);
      if(arr[i-1] > arr[i] ) {
        if(isIncrementing) {
          count += 1;
        }
        isIncrementing = true;
      }
     }
     if(count === 0) {console.log('count is 0');}
     //the above if statement shows that the code works with an array of [0, 0, 0, 0, 0, 0]
     if(isIncrementing) {
      count += 1;
      console.log(count);
      return count;
    }
};
hasIncrementingSequence(arr);
