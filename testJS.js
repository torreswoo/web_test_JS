var Animal = function(){}
Animal.prototype = {
    walk : function(){   document.writeln('종종'); }
};

var SuperAnimal = function(){}
SuperAnimal.prototype = {
    walk : function(){  document.writeln('다다다다닷');  }
}

var Dog = function(){}
Dog.prototype = new Animal();
var d1 = new Dog();
d1.walk();

var Dog = function(){}
Dog.prototype = new SuperAnimal();
var d2 = new Dog();

d2.walk();
d1.walk();
