var ao_polygon = (function() {

    var sides = 6;
    var name = "Polygon";
    var type = "2D";
    
    function getSides() {
    
        return sides;
    };

    function getName() {
        
        return name;    
    };
    
    function getType(){
        
        return type;
    };

    return {
        getSides: getSides,
        getName: getName,
        getType: getType
    };
})();

module.exports = ao_polygon;