define([
	'jquery',
	'underscore',
	'backbone',
	'app/collection/collection_1',
	'app/collection/collection_2',
	'app/collection/collection_3'
], function(
	$,
	_,
	Backbone,
	Collection1,
	Collection2,
	Collection3
){
	var CollectionShow = function(){
		// new Collection1();

		// new Collection2();
		
		new Collection3();
	};
	return CollectionShow;
});
