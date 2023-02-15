function BMICalculate(weight, height){
    let BMI= weight/(height*height)

    return ((Math.round(BMI))+" "+"kg/m")
}

console.log(BMICalculate(65,1.8))