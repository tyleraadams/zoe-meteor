var ContactTemplate = (function(){

	function sendMessage(e) {
		e.preventDefault();
    
    var contact = {};
    contact.name = $(e.target).find('#name').val();
    contact.email = $(e.target).find('#email').val();
    contact.message = $(e.target).find('#message').val();
    Meteor.call('sendMessage', contact, function(err,result){
      console.log(result);
      clearForm(e.target);
    });

    

	}

	function clearForm(form){
		
		form.reset();
	}


	//public methods
	return {
		sendMessage: sendMessage
	}

})();


Template.contact.events({
	'submit #contact-form': ContactTemplate.sendMessage
});