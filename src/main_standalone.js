//process.env.DEBUG="my-namespace";
const configLoader = require('./config/read_config.js');
process.env = configLoader.loadConfig('config/config_main.json',process.env);
//console.log(process.env);
const debug = require('debug')('ao')  ;
const name = 'my-ao-ap'  ;

var greet = require('./greet');   // Import the greet function
var Polygon_Module  = require('./generic/ao_polygon');   // Import the ao_rectangle function
var Rectangle_Module  = require('./generic/ao_rectangle');   // Import the ao_rectangle function




debug('booting %s', name)
debug('  GREET ENV ? :  %s', process.env.GREET)

debug("____________________________________________________________________________");
 greet('Webpack');
 
debug(typeof Rectangle_Module); // displays "Rectangle"
debug("--- Polygon_Module");
debug(Polygon_Module); // displays "Polygon_Module"
debug("--- Rectangle_Modulee");
debug(Rectangle_Module); // displays "Rectangle"
console.log("--- getProto");
console.log(Rectangle_Module.getProto()); // displays "Rectangle"
console.log(Rectangle_Module.getName()); // displays "Rectangle"
console.log(Rectangle_Module.getSides()); // displays 4
console.log(Rectangle_Module.getType()); // displays "2D"
 


