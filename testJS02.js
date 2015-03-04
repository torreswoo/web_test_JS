
		// 생성자 함수를 선언합니다.
		function Rectangle(w, h) {
            // 변수를 선언합니다.
            var width = w;
            var height = h;

            // 메서드를 선언합니다.
            this.getWidth = function () { return w; };
            this.getHeight = function () { return h; };
            this.setWidth = function (w) {
            	if (w < 0) {
            		throw '길이는 음수일 수 없습니다.';
            	} else {
            		width = w;
            	}
            };

            this.setHeight = function (h) {
            	if (w < 0) {
            		throw '길이는 음수일 수 없습니다.';
            	} else {
            		height = h;
            	}
            };
        }

        Rectangle.prototype.getArea = function () {
        	return this.getWidth() * this.getHeight();
        };

        // 생성자 함수를선언 합니다.
        function Square(length) {
        	this.base = Rectangle;			// !!
        	this.base(length, length);		// !!
        }
        Square.prototype = Rectangle.prototype;		// !!
        Square.prototype.constructor = Square;		// !! 

        // 변수를 선언합니다.
        var rectangle = new Rectangle(5, 7);
        var square = new Square(5);
        alert(rectangle.getArea() + ' : ' + square.getArea());
