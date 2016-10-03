(function() {

	function sectionClick() {
		console.log('click', this.parentNode.classList.contains('side-nav-expanded'));
		if (this.parentNode.classList.contains('side-nav-expanded')) {
			this.parentNode.classList.remove('side-nav-expanded');
		} else {
			this.parentNode.classList.add('side-nav-expanded');
		}
	}

	var navSections = document.getElementsByClassName('side-nav-section');
	for (var i=0; i<navSections.length; i++) {

		var section = navSections[i];

		var hasSubsections = (section.getElementsByTagName('ul').length > 0);
		if (!hasSubsections) {
			continue;
		}

		var anchor = section.getElementsByTagName('a')[0];
		anchor.setAttribute('tabindex', '0');
		anchor.addEventListener('click', sectionClick);
		anchor.addEventListener('keypress', function(e) {
			if (e.keyCode === 13) {
				sectionClick.call(this);
			}
		});

	}

})();
