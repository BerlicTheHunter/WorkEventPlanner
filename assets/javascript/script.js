var displayDate= $("#currentDay");
var date=moment();
var timeIDEl= $(".timeID");
var inputField= $(".description");
// ..........Display Current Date.............//
displayDate.text(date.format("LLLL"));

//..........Change Input Background Based On Time..........//
timeIDEl.each(function(index){
    var timeID = timeIDEl[index].innerHTML
    var mTimeID = moment(timeID, "h hh a");
    
    if(mTimeID.hour() < date.hour()){
        $(inputField[index]).toggleClass("past");
    }
    else if(mTimeID.hour() == date.hour()){
        $(inputField[index]).toggleClass("present");
    }
    else{
        $(inputField[index]).toggleClass("future");
    };
});

//..........Display Items From Current Local Storage........//
var currentList = localStorage.ToDo;

if(currentList == undefined){
    localStorage.ToDo = JSON.stringify([]);
}

console.log(JSON.parse(localStorage.ToDo));