define([
	'jquery',
	'underscore',
	'backbone',
	'app/collection/collection_1',
	'app/collection/collection_2'
], function(
	$,
	_,
	Backbone,
	Collection1,
	Collection2
){
	var CollectionShow = function(){
		// new Collection1();
		new Collection2();
	};
	return CollectionShow;
});
