function addEventListener(typeOfEvent, Callback){

    var eventThatHappened={
        eventType:"keypress",
        key:"p",
        duration:2
    }

    if(eventThatHappened.eventType==typeOfEvent){
        Callback(eventThatHappened)
    }
}

addEventListener("keypress",function(event){
    console.log(event)
})