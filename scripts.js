(function(){

	var Tabs = function(){
		this.$container = document.querySelector('.tabs');
		this.$elements 	= this.$container.querySelectorAll('.tabs-link');
		
		this.addEvents();
	};

	Tabs.prototype.addEventListeners = function( elements, event, method ) {
		var that 	= this;
		var _this 	= {};

		[].forEach.call(elements, function(element, index){
			_this = {
				that: that,
				index: index,
				element: element
			}
			
			element.addEventListener( event, method.bind(_this) );
		});
	};

	
})();


