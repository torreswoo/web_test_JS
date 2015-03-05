
function initializeBase(derive, base, baseArgs){
    base.apply(derive, baseArgs);

    for(prop in base.prototype){
        var proto = derive.constructor.prototype;
        if(!proto[prop]){
            proto[prop] = base.prototype[prop];
        }
    }

}

//Member class
var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function(){
    return this.lastName+' '+ this.firstName;
};

//SpecialMember class extends Member
