let str = "Hello6 9World 2, Nic8e D7ay!";

const SearchingChallege = (str) =>{
    let arr = str.split('');
    let StrSum = 0
    let numSum = 0;
   
    for(let i = 0;i<arr.length;i++){
       if(parseInt(arr[i])){
        numSum += parseInt(arr[i])
       }
       if(!parseInt(arr[i])){
            StrSum += 1
       }
    }
    return Math.ceil(numSum/StrSum)
}

console.log(SearchingChallege(str))