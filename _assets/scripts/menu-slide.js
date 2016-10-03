(function() {

	var menuOpen = document.getElementById('menuOpen');
	var menuClose = document.getElementById('menuClose');
	var sideNav = document.getElementById('side-nav');
	var sideNavMask = document.getElementById('side-nav-mask');

	function close() {

		var state = document.body.getAttribute('data-menu-state');
		if (state !== 'opened') {
			return;
		}
		document.body.setAttribute('data-menu-state', 'transition');
		menuOpen.focus();

		document.body.style.overflow = 'auto';
		document.body.style.position = 'static';
		document.body.style.width = 'auto';

		setTimeout(function() {
			document.body.setAttribute('data-menu-state', 'closed');
		}, 350);

	}

	function open() {

		var state = document.body.getAttribute('data-menu-state');
		if (state !== 'closed') {
			return;
		}
		document.body.setAttribute('data-menu-state', 'transition');

		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';

		setTimeout(function() {
			document.body.setAttribute('data-menu-state', 'opened');
			menuClose.focus();
		}, 50);

	}

	menuOpen.addEventListener('click', open);
	menuClose.addEventListener('click', close);
	sideNavMask.addEventListener('click', close);

})();
