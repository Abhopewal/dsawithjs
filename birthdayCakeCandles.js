let arr = [4, 4,1, 3];

const birthdayCakeCandles = (arr) => {
    let n = arr.length;
    let height = Math.max(...arr);
    let num = 0;
    for (let i = 0; i < n; i++) {
        if(arr[i]==height){
            num++
        }
    }
    console.log(num)

}

birthdayCakeCandles(arr);