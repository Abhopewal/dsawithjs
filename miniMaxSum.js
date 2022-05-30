let arr = [1, 2, 3, 4, 5];


const miniMaxSum = (arr) => {
   var sum = arr[0],
      min = arr[0],
      max = arr[0];

   for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
      if (min > arr[i]) {
         min = arr[i];
      }
      if (max < arr[i]) {
         max = arr[i];
      }
   }

   console.log(`${sum - min} ${sum - max}`)
}
miniMaxSum(arr)



