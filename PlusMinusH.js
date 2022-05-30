let arr = [-4,-9,-2, 0, 4, 1];

const PlusMinusH = (arr) => {
    let neg = 0;
    let pos = 0;
    let zero = 0;
    let n = arr.length;
    for(i=0;i<n;i++){
        if(arr[i]<0){
            neg++
        }
        if(arr[i]>0){
            pos++
        }
        if(arr[i]==0){
            zero++
        }
    }
    console.log((pos/n).toFixed(6));
    console.log((neg/n).toFixed(6));
    console.log((zero/n).toFixed(6));
}
PlusMinusH(arr);
