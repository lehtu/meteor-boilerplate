Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        }, function(error) {
            if (error)
                console.log(error);
        });
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});
