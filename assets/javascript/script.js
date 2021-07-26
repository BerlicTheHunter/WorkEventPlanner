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

//..........Initiate Local Storage and Clear Storage for a new day........//
var today = date.format("LL");
var currentList = localStorage.planner;
var currentArray=[];
console.log(currentArray)
var plannerList0=[
    "",
    "",
    "",
    "",
    "",
    "",
    "testing",
    "",
    "",
    "",
    "",
    "",
    today,
];
if(currentList == undefined || currentArray[12] != today){
    localStorage.planner = JSON.stringify(plannerList0);
    var currentList = localStorage.planner;
    var currentArray= JSON.parse(currentList);
};


// ..........Set Values in storage to timebocks..........//
timeIDEl.each(function(index){
    $(inputField[index]).val(currentArray[index]);
    console.log(currentArray[index]);
});





console.log(currentArray[12]);
console.log(today);