$(function() {

	require('../styl/main.styl');
	require('../styl/mobile.styl');
	require('../styl/toold.styl');
	require('gsap');

	var ApplicationRouter = require('./routers/application_router');
	var router = new ApplicationRouter();
	Backbone.history.start();
});
