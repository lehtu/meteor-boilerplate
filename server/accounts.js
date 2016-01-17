// See more about this in here: http://docs.meteor.com/#/full/accounts_config
Accounts.config({
    sendVerificationEmail: false,
    forbidClientAccountCreation: false,
    //restrictCreationByEamilDomain: [String or Function],
    loginExpirationInDays: 30,
    //oauthSecretKey: [String]
});

Accounts.validateNewUser(function (user) {
    if (user.username && user.username.length >= 3)
        return true;
    throw new Meteor.Error(403, "Username must have at least 3 characters");
});
