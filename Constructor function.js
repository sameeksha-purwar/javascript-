function housekeeper (yearofexperience, name,cleaningreporitery){
    this.yearofexperience=yearofexperience
    this.name=name
    this.cleaningreporitery = cleaningreporitery
    this.clean=function(){
        alert("Cleaning in progress...")
    }   
}
var housekeeper1=new housekeeper(12, "sam",["bathroom"])

console.log(housekeeper1.name)

housekeeper1.clean()