var displayDate= $("#displayDate");
var date=moment();

displayDate.text(date.format("LLLL"));

var timeIDEl= $(".timeID");
var inputField= $(".form-control");

console.log(inputField);


timeIDEl.each(function(index){
    var timeID = timeIDEl[index].innerHTML
    var mTimeID = moment(timeID, "h hh a");
    
    if(mTimeID.hour() < date.hour()){
        $(inputField[index]).css("background-color","lightgray");
    }
    else if(mTimeID.hour() == date.hour()){
        $(inputField[index]).css({"background-color":"Tomato", "color":"white"});
    }
    else{
        $(inputField[index]).css("background-color","DarkSeaGreen");
    };
});