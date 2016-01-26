var authenticatedRoutes = FlowRouter.group({
    name: 'authenticated',
    prefix: "/admin"
});

authenticatedRoutes.route('/', {
    name: 'index',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'index'});
    }
});

authenticatedRoutes.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        BlazeLayout.render('defaultLayout', { main: 'dashboard'});
    }
});
