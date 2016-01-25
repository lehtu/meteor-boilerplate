FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'home'});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'login'});
    }
});

FlowRouter.route('/signup', {
    name: 'signup',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'signup'});
    }
});
