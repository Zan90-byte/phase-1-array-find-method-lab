// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(record){
    let winRecord = record.find(year => year.result === "W");
    
    if (winRecord){
        return winRecord.year;  
    }else{
        return undefined;
    }
}

console.log(superbowlWin(record));