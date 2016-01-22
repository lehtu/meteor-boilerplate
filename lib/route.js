FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'home'});
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'notFound'});
    }
};
