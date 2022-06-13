function calculate(){
    let bmi;
    let result = document.getElementById("result");
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);

    document.getElementById("weight-val").textContent = weight + " kg";
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

    if(bmi < 18.5){
        category = "Underweight";
    }

    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Normal Weight";
        
    }
 
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight";
    }

    else{
        category = "Obese";
    }

    document.getElementById("category").innerHTML  = `${bmi} ${category}`;
}
