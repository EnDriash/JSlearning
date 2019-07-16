(function(){

Smartphone.prototype = {
    brand: "",
    price: 0,
    color: "",
    getInfo: function(){
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".")},
}

function Smartphone(a,b,c){
    this.brand = a;
    this.price = b;
    this.color = c;
}


var iPhone6S = new Smartphone("Apple", 2250, "silver");
var iPhone5 = new Smartphone("Apple", 1632, "blue");
var iPhone5S = new Smartphone("Apple", 1652, "red");

iPhone5.getInfo();
iPhone5S.getInfo();
iPhone6S.getInfo();
})();