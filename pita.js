const Pita = (function() {

	const PIAZZA_MAP = {
		NAV: 'top_bar',
		PAGE: 'page_main',
		LOAD: 'loading-screen'
	}

	const SECTION = {
		NAV: 'pita-nav',
		PAGE: 'pita-page',
		LOAD: 'pita-loading'
	}

	function init() {
		_preprocessDom();
	}

	function getElement(key) {
		return _elements[key];
	}

	const _elements = {}

	function _preprocessDom() {
		_preprocessNav();
		_preprocessPage();
		_preprocessLoad();
	}

	function _preprocessNav() {
		const nav = _addMainElement(SECTION.NAV, PIAZZA_MAP.NAV);
		const pitaTag = document.createElement('span');
		pitaTag.innerText = '+pita';
		pitaTag.setAttribute('id', 'pita-tag');
		nav.appendChild(pitaTag);
	}

	function _preprocessPage() {
		const page = _addMainElement(SECTION.PAGE, PIAZZA_MAP.PAGE);
		page.classList.remove('has_popular_tags_bar');
	}

	function _preprocessLoad() {
		const load = _addMainElement(SECTION.LOAD, PIAZZA_MAP.LOAD);
	}

	function _addMainElement(key, id) {
		const element = document.getElementById(id);
		element.setAttribute('id', key);
		_elements[key] = element;
		return element;
	}

	return {
		init,
		getElement
	};

})()

console.log('initializing Pita v0.1.0...');
Pita.init();
console.log('done!');