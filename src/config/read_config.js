var ao_read_config = (function() {

    
    function loadConfig(configFile, env) {
        console.log("loadConfig :"+ configFile);
        var fs = require("fs");
        var content = fs.readFileSync("config/config_main.json");
        console.log("configFile: Output Content : \n"+ content);
        var jsonContent = JSON.parse(content);
        // Get Value from JSON
        for(var exKey in jsonContent) {
            console.log("configFile: key:"+exKey+", value:"+jsonContent[exKey]);
            env[exKey]=jsonContent[exKey];
        }
        return env;
    };


    return {
        loadConfig: loadConfig
    };
})();

module.exports =  ao_read_config;


//process.env.debug_test="my-namespace";

// var mres = Object.keys(process.env).sort().filter(function (key) { return /^debug_/i.test(key);}).
// reduce(function (obj, key) {
//   // camel-case
//   var prop = key
//     .substring(6)
//     .toLowerCase()
//     .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

//   // coerce string value into JS value
//   var val = process.env[key];
//   if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
//   else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
//   else if (val === 'null') val = null;
//   else if (typeof val == 'string') val = val
//   else val = Number(val);

//   obj[prop] = val;
//   return obj;
// }, {});

// console.log("--- mres");
// console.log(mres);