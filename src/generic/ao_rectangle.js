var Polygon_Module = require("./ao_polygon.js");


var ao_rectangle = (function() {
    var Rectangle = {};
    var sides = 4;
    var name = "Rectangle";
    var color = "blue";

    Rectangle.__proto__ = Polygon_Module;
    
    Rectangle.getProto = function(){
      return __proto__;
    };
    
    Rectangle.getName = function(){
      return name;
    };
    
    Rectangle.getSides = function(){
      return sides;
    };
    
    Rectangle.getColor = function(){
        return color;
    };
    
    
  return {
      getProto: Rectangle.getProto,
      getName: Rectangle.getName,
      getSides: Rectangle.getSides,
      getType: Rectangle.getType
  };

})();


module.exports = ao_rectangle;