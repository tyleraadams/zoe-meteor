var MainTemplate = (function(){

	function onRender() {

	}

	function showFullArticle(e) {
		
		$(e.target).parent().parent().parent().find('.showOnClick').css('display', 'inline-block');
		debugger
		$(e.target).parent().parent().parent().click(function(e){
			$(e.target).find('.showOnClick').css('display', 'none');
		})

	}


	//public methods
	return {
		onRender: onRender,
		showFullArticle: showFullArticle
	}

})();

// Template.main.rendered = MainTemplate.onRender;

// Template.main.events({
	// 'click .preview': MainTemplate.showFullArticle
// });