function temprature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32

    var c = document.getElementById("celcius").value;
    
    var f = (c * 9/5) + 32

    document.getElementById("fahrenheit").innerHTML= f + " Fahrenheit"



}

function weight(){
    //To convert KGs to Pounds
    // KG * 2.2

    var kg = document.getElementById("kilo").value;
    
    var p = kg * 2.2

    document.getElementById("pounds").innerHTML= p + " Pounds"
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137

    var km = document.getElementById("km").value;
    
    var m = km * 0.62137

    document.getElementById("miles").innerHTML= m + " Miles"
}