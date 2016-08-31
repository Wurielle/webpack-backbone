MainPageView = require('../main_page_view');
var HomepageView = MainPageView.extend({
	initialize: function() {

    },
	render: function(json){
		this.json = json;
		
        // on ajouter le template html
        var template = require('../../../templates/homepage.html');
        var html = template({homepage: this.json});
        this.$el.append(html);
	},
	show: function(){

	},
	hide: function(){

	}
});
module.exports = HomepageView;
