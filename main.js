var inputTextArray, 
	strClosed;

var checkSyb = function(syb) {
	if (syb === '(') {
		return ')';
	} else if (syb === '{') {
		return '}';
	} else if (syb === '[') {
		return ']';
	};
}

function getText() {
	strClosed = [];
	inputTextArray = document.querySelector('[type="text"]').value.split('');
	for(var i = 0; i < inputTextArray.length; i += 1) {
		if (checkSyb(inputTextArray[i])) {
			strClosed.push(checkSyb(inputTextArray[i]));
		} else if (inputTextArray[i] === strClosed[strClosed.length-1]) {
			strClosed.pop();
			};
		};
	if(strClosed.length > 0) {console.log(false);}	else {console.log(true);}
}
