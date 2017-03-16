var firstname = 'Sherlock';
var addSurname = () => {
    var surname = 'Holmes';
    var fullname = firstname + ' ' + surname;
    console.log(fullname);
}
addSurname();

function a1(){
	var myVar = 1;
	function b1(){
	    console.log(myVar);
    }
    b1();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a1();