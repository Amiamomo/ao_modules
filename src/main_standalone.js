var greet = require('./greet');   // Import the greet function
var Polygon_Module  = require('./generic/ao_polygon');   // Import the ao_rectangle function
var Rectangle_Module  = require('./generic/ao_rectangle');   // Import the ao_rectangle function


console.log("____________________________________________________________________________");
 greet('Webpack');
 
console.log(typeof Rectangle_Module); // displays "Rectangle"
console.log("--- Polygon_Module");
console.log(Polygon_Module); // displays "Polygon_Module"
console.log("--- Rectangle_Modulee");
console.log(Rectangle_Module); // displays "Rectangle"
console.log("--- getProto");
console.log(Rectangle_Module.getProto()); // displays "Rectangle"
console.log(Rectangle_Module.getName()); // displays "Rectangle"
console.log(Rectangle_Module.getSides()); // displays 4
console.log(Rectangle_Module.getType()); // displays "2D"
 