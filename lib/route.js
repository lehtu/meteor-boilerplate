FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'home'});
    }
});
