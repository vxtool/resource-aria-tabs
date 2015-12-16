var assert 	= require('assert');
var jsdom 	= require('mocha-jsdom');

describe('Tabs', function(){

	jsdom();

	var $tabs;
	var $tabsLink;
	var $tabsContent;
	var dom = '<div class="tabs">';
		dom +='<a class="tabs-link" aria-selected="true" tabindex="0" href="#content1">Link 1</a>';
		dom +='<a class="tabs-link" tabindex="-1" href="#content2">Link 2</a>';
		dom +='<section class="tabs-content" id="content1"></section>';
		dom +='<section class="tabs-content" id="content2" aria-hidden="true"></section>';
		dom +='</div>';

	before(function() {
		
		document.body.innerHTML = dom;

		$tabs 			= document.querySelectorAll('.tabs');
		$tabsLink 		= document.querySelectorAll('.tabs-link');
		$tabsContent 	= document.querySelectorAll('.tabs-content');
	});

	it('There are elements', function () {
		assert.equal($tabs.length, 1);
		assert.equal($tabsLink.length, 2);
		assert.equal($tabsContent.length, 2);
	});

	it('Item selected', function () {
		assert.equal($tabsLink[0].getAttribute('aria-selected'), 'true');
		assert.equal($tabsLink[0].getAttribute('tabindex'), '0');

		assert.equal($tabsContent[0].getAttribute('aria-hidden'), null);
		
		assert.equal($tabsLink[0].getAttribute('href').substring(1), $tabsContent[0].getAttribute('id'));
	});

	it('Item is not selected', function () {
		assert.equal($tabsLink[1].getAttribute('aria-selected'), null);
		assert.equal($tabsLink[1].getAttribute('tabindex'), '-1');

		assert.equal($tabsContent[1].getAttribute('aria-hidden'), 'true');

		assert.equal($tabsLink[1].getAttribute('href').substring(1), $tabsContent[1].getAttribute('id'));
	});


});