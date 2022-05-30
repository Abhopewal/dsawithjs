let arr = [3,5,1,8,6,7];

const BubbleSort = (arr)=>{
    let temp;
    let n = arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }
    }
    }
    return arr;
}
console.log(BubbleSort(arr))