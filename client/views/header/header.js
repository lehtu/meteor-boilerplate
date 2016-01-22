Template.header.helpers({
});

Template.header.events({
    'click .logout': function() {
        Meteor.logout(function(error) {
            if ( error ) {
                console.log( error.reason, 'warning' );
            } else {
                console.log( 'Logged out!', 'success' );
                FlowRouter.go('home');
            }
        });
    }
});
