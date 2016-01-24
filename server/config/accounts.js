// See more about this in here: http://docs.meteor.com/#/full/accounts_config
Accounts.config({
    sendVerificationEmail: false,
    forbidClientAccountCreation: false,
    //restrictCreationByEamilDomain: [String or Function],
    loginExpirationInDays: 30,
    //oauthSecretKey: [String]
});

Accounts.validateNewUser(function (user) {
    if (!user.emails[0].address || !validateEmail(user.emails[0].address))
        throw new Meteor.Error(403, "There is a problem with given email address.", user);

    return true;
});
