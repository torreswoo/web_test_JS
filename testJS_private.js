function Triangle(){
	var _base;
	var _height;
	var _checkArgs = function(val){
		return (!isNaN(val) && val >0);
	}

	this.setBase = function(base){
		if( _checkArgs(base) ){
			_base = base;
		}
	}

	this.setHeight = function(height){
		if( _checkArgs(height) ){
			_height = height;
		}
	}

	this.getBase = function(){	return _base; }
	this.getHeight = function(){	return _height; }
}


// !private멤버에 액세스하지않는 보통의 메소드를 정의!
Triangle.prototype.getArea = function(){
	return this.getBase() * this.getHeight() /2;
}



// test
var t = new Triangle();

t._base = 10;
t._height = 2;
document.writeln('삼각형의 면젹: '+ t.getArea());

t.setBase(10);
t.setHeight(2);
document.writeln('삼각형의 면젹: '+ t.getArea());
