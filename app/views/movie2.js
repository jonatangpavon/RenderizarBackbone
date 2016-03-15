var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = Backbone.View.extend({
tagName:'article',
className: 'movie',
template:'<h1><%= titulo %><hr></h1>',


render: function(){
	var tmpl = _.template(this.template);
	this.$el.html(tmpl(this.model.toJSON()));
	this.$el.toggleClass('selected', this.model.get('selected'));
	return this;
},
/*
initialize: function(){
	_.bindAll(this, "render");
}
*/
initialize: function(){
	this.listenTo(this.model, "change:titulo", this.render);
}

});
module.exports = MovieView;

/* el mismo ejemplo que movie.js pero renderizando con una template*/
