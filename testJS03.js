//<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
//<script type="text/javascript" src="testJS.js"></script>

$(document).ready(function() {
    var array = [
        { name: 'Google', link: 'http://www.google.co.kr' },
        { name: 'Naver', link: 'http://www.naver.com' },
        { name: 'Daum', link: 'http://www.daum.net' },
    ];
        
    $.each(array, function (index, item) {
        var output = '';
            
        output += '<a href="' + item.link + '">';
        output += '<h1>' + item.name + '</h1>';
        output += '</a>';
            
        document.body.innerHTML += output;
    });
});