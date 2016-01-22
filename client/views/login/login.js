Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passwordVar, function(error){
            if (error) {
                console.log(error);
            } else {
                console.log("succesfully logged in!");
                FlowRouter.go('home');
            }
        });
    }
});
