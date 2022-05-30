let grades = [10,5,20,20,4,5,2,25,1];

let gradingStudents = (grades) =>{
    let n = grades.length;
    let multpleofFive = 0;
    for(let i=0;i<n;i++){
        multpleofFive =  Math.ceil(grades[i] / 5) * 5;
        if(multpleofFive-grades[i]<3 && multpleofFive>=40){
            grades[i] = multpleofFive;
        }

    }
    console.log(multpleofFive)
}
gradingStudents(grades);

