// $ = jQuery = require("jquery");
// require('jquery');
// require('jquery-mobile');
// The code below prevents the VERY VERY annoying behavior that jquery mobile somehow force you to use as default. Removing those lines will break EVERYTHING but like EVERTYHING!!
// $.mobile.ajaxEnabled = false;
// $.mobile.pushStateEnabled = false; // Recommended is false, when ajax is disabled
// $.mobile.autoInitializePage = false; // This one does the job
// var silentScroll = $.mobile.silentScroll;
// $.mobile.silentScroll = function( ypos ) {
//     if ( $.type( ypos ) !== "number" ) {
//         // FIX : prevent auto scroll to top after page load
//         return;
//     } else {
//         silentScroll.apply(this, arguments);
//     }
// }

$(function() {

	require('../styl/main.styl');
	require('../styl/mobile.styl');
	require('../styl/toold.styl');
	require('../sass/main.sass')
	require('gsap');

	var ApplicationRouter = require('./routers/application_router');
	var router = new ApplicationRouter();
	Backbone.history.start();
});
