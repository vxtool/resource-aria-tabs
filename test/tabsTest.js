var assert 	= require('assert');
var jsdom 	= require('mocha-jsdom');

describe('Tabs', function(){

	jsdom();

	before(function() {
		document.body.innerHTML = '<div class="tabs"><a class="tabs-link" href="#content1">Link 1</a><section id="content1"></section></div>';
	});

	it('Tabs exists', function () {
		assert.equal(document.querySelectorAll('.tabs').length, 1);
	});

	it('Links exists', function () {
		assert.equal(document.querySelectorAll('.tabs-link').length, 1);
	});

});