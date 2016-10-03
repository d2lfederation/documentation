(function() {

	function applyWcToTag(tagName, wcName) {
		var elems = document.getElementsByTagName(tagName);
		for (var i=0; i<elems.length; i++) {
			var elem = elems[i];
			if (elem.classList.contains('wc-skip') || elem.getAttribute('is') !== null) {
				continue;
			}
			var newElem = document.createElement(tagName, wcName);
			newElem.innerHTML = elem.innerHTML;
			for (var j=0; j<elem.attributes.length; j++) {
				var attr = elem.attributes[j];
				if (attr.specified) {
					newElem.setAttribute(attr.name, attr.value);
				}
			}
			elem.parentNode.insertBefore(newElem, elem);
			elem.parentNode.removeChild(elem);
		}
	}

	applyWcToTag('a', 'd2l-link');
	applyWcToTag('table', 'd2l-table');

})();
