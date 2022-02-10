//Copy code to file javascript to run
function miniMaxSum(arr) {
  let min, max, sum;
  //Init value first index array
  min = max = sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    //Calculate sum all number in array
    sum += arr[i];
    //Find number min
    if (arr[i] < min) {
      min = arr[i];
    }
    //Find number max
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  //result print console min - max
  console.log(sum - max, sum - min);
}

miniMaxSum([1, 2, 3, 4, 5]);
