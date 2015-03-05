var grade{
	'list': {'egoing':10, 'B':8, 'C':80},
	'show': function(){
		for(var name in this.list){
			console.log(name, this.list[name]);
		}
	}
}

alert(grade['list']['egoing']);

grade['show']();
grade.show();