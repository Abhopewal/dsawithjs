let n = 6 ;

for(var i = 0; i<n;i++){
    for(var j = n; j>0;j--){
        if(j>i+1){
        process.stdout.write(" ");
        }else{
            process.stdout.write("*");
        }
        
    }
    process.stdout.write(`\n`);
}