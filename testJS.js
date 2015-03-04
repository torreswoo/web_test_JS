function sum(){

    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        var tmp = arguments[i]

        if(isNaN(tmp)){
            throw new Error('지정값이 숫자가 아닙니다.: '+tmp);
        }
        result += tmp;
    };
    return result;
}