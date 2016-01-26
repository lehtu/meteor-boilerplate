var handleRedirect = function(routes, redirect) {
    var currentRoute = FlowRouter.getRouteName();
    if (routes.indexOf(currentRoute) > -1) {
        FlowRouter.go(redirect);
        return true;
    }
};

Template.defaultLayout.helpers({
    loggingIn: function() {
        return Meteor.loggingIn();
    },
    authenticated: function() {
        return !Meteor.loggingIn() && Meteor.user();
    },
    redirectAuthenticated: function() {
        return handleRedirect([
            'login',
            'signup'
        ], '/' );
    },
    redirectPublic: function() {
        return handleRedirect([
            'author'
        ], '/login' );
    }
});
