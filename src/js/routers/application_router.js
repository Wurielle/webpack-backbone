var Homepage = require('../views/homepage/homepage_view');
require('../../datas/datas.json');

var ApplicationRouter = Backbone.Router.extend({
	routes: {
        "*actions": "defaultRoute",
  	},
  	initialize: function() {
        this.listener = {};
        _.extend(this.listener, Backbone.Events);

        this.json = require('../../datas/datas.json');

        this.homepage = new Homepage({el: $('#homepage')});
		this.homepage.render(this.json.pages[0]);
    },
});
module.exports = ApplicationRouter;
