// ..........Set Universal Variable..........//
var displayDate= $("#currentDay");
var date=moment();
var timeIDEl= $(".timeID");
var inputField= $(".description");
var saveBtn= $(".saveBtn");

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
var plannerList0=["","","","","","","","","","","","",today,];

//..........Define currentArray if no localStorage Exists..........//
if(currentList == undefined){
    var currentArray = [];
    localStorage.planner = JSON.stringify(plannerList0);
    var currentList = localStorage.planner;
    var currentArray= JSON.parse(currentList);
}

var currentArray= JSON.parse(currentList);

//..........Clear Out timeblocks at the start of a new day..........//
if( currentArray[12] != today){
    localStorage.planner = JSON.stringify(plannerList0);
    var currentList = localStorage.planner;
    var currentArray= JSON.parse(currentList);
};

// ..........Set Values in storage to timebocks..........//
timeIDEl.each(function(index){
    $(inputField[index]).val(currentArray[index]);
});

// ..........Save new inputs to LocalStorage
saveBtn.each(function(index){
    $(this).on("click", function(){
        console.log(index + " was clicked");
        currentArray[index]= $(inputField[index]).val();
        localStorage.planner = JSON.stringify(currentArray);
        currentList = localStorage.planner;
        console.log(inputField[index]);
    });
});
