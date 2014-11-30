Meteor.methods({

  sendMessage: function(contact) {
    Email.send({
          to: 'zoepearson@gmail.com',
          from: contact.email,
          subject: 'New Message From zoepearson.me',
          text: contact.message
      });


  }

});

