var order = [];
order["i"] = 1;
order["v"] = 5;
order["x"] = 10;
order["l"] = 50;
order["c"] = 100;
order["d"] = 500;
order["m"] = 1000;


var input = "MMMDCCXXIV".toLowerCase();

var prev = "m";
var total = 0;
for (var i = 0; i < input.length; i += 1){
    if (order[prev] < order[input[i]]){
        total += order[input[i]] - order[prev];
    }
    else if (!(i < input.length - 1 && order[input[i]] < order[input[i + 1]])){
        total += order[input[i]];
    }
    else if(i == input.length){
        total += order[input[i]];
    }
    prev = input[i];
}
console.log(total);