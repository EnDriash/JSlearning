(function(){

Button.prototype = {
	create: function() {
	var self = this;
	this.element = document.createElement('button');
	this.element.innerText = this.text;
	this.element.addEventListener('click', function() {
		alert(self.text);
	});
    document.body.appendChild(this.element);
}
}

function Button(text) {
	this.text = text || 'Hello';
}

var btn1 = new Button('Wyświetlamy Hello!');
btn1.create();

})();