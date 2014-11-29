var ContactTemplate = (function(){

	function sendMessage(e) {
		e.preventDefault();
    debugger
    var contact = {};
    contact.name = $(e.target).find('#name').val();
    contact.email = $(e.target).find('#email').val();
    contact.message = $(e.target).find('#message').val();
    Meteor.call('sendMessage', contact, function(err,result){
      console.log(result);
    });

	}


	//public methods
	return {
		sendMessage: sendMessage
	}

})();


Template.contact.events({
	'submit #contact-form': ContactTemplate.sendMessage
});