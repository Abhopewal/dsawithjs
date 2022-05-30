// // Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// // Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// // - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// // Example

// // s = '12:01:00PM'

// // Return '12:01:00'.

// // s = '12:01:00AM'

// // Return '00:01:00'.

// // Function Description

// // Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// // timeConversion has the following parameter(s):

// // string s: a time in  hour format
// // Returns

// // string: the time in  hour format

let time = "10:05:45AM";

let timeConversion = (time) => {
    let meridiem = time.slice(-2);
    var matches = time.match(/\d+/g);
    console.log(matches)
    if (meridiem === "PM") {
        if(matches[0]==="12"){
             matches[0] = "12"
        }else{
        matches[0] = (parseInt(matches[0])+12).toString()
        }
    }

    if(meridiem === "AM"){
        if(matches[0]==="12") matches[0] = "00"
    }
    
    console.log(`${matches[0]}:${matches[1]}:${matches[2]}`)
}

timeConversion(time)
