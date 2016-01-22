Template.signup.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        }, function(error) {
            if (error) {
                console.log(error);
            } else {
                console.log("signup completed succesfully");
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
    }
});
