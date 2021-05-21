function convertFahrToCelsius(fahrTemp)
{
var celsiusTemp;
var _fahrTemp = JSON.stringify(fahrTemp);
var _isNan = isNaN(fahrTemp);

if(_isNan){
Array.isArray(fahrTemp) ? celsiusTemp = _fahrTemp + " is not a valid number but a/an array." : celsiusTemp = _fahrTemp + " is not a valid number but a/an object.";
console.log("convertFahrToCelsius("+_fahrTemp+")");
console.log(celsiusTemp+"\n");
}else{
celsiusTemp = (fahrTemp - 32) * 5/9;
console.log("convertFahrToCelsius("+_fahrTemp+")");
console.log(celsiusTemp.toFixed(4)+"\n");
}
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});





function checkYuGiOH(n)
{
var l_array = [];
var i = 1,j = 1,m = 0;

if(!isNaN(n)){
for(i; i <= n; i++) {
j = i;
m = 0;
if(i % 2 == 0){j = "yu"; m++;}
if(i % 3 == 0){j = "gi"; m++;}
if(i % 5 == 0){j = "oh"; m++;}

if(m == 2){j = "yu-oh";}
if(m == 3){j = "yu-gi-oh";}

l_array.push(j);
}
console.log(l_array);
}else{console.log("Invalid parameter: "+JSON.stringify(n))}
}


checkYuGiOH(10);
checkYuGiOH(5);
checkYuGiOH("fizzbuzz is meh")
