(function() {

	function applyClassToTag(tagName, className) {
		var elems = document.getElementsByTagName(tagName);
		for (var i=0; i<elems.length; i++) {
			elems[i].classList.add(className);
		}
	}

	applyClassToTag('h1', 'd2l-heading-1');
	applyClassToTag('h2', 'd2l-heading-2');
	applyClassToTag('h3', 'd2l-heading-3');
	applyClassToTag('h4', 'd2l-heading-4');

})();
