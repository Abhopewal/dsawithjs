let arr = [1,1,2,2,4,5,5];
let res = 0;
for(let i = 0;i<arr.length;i++){
  res = res ^ arr[i]
}

console.log(res)