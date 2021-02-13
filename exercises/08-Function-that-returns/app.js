var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

// console.log("El monto en euros es de: "+ dollarToEuro(137) +" y el monto en Yenes es de: " + euroToYen(dollarToEuro(137)));
console.log(euroToYen(dollarToEuro(137)))