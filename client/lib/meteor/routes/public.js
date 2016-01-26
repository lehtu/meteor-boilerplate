var publicRoutes = FlowRouter.group({
    name: 'public'
});

publicRoutes.route('/signup', {
    name: 'signup',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'signup'});
    }
});

publicRoutes.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'login'});
    }
});

publicRoutes.route('/news', {
    name: 'news',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'news'});
    }
});

publicRoutes.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'home'});
    }
});
