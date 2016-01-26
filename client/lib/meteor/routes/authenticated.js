var authenticatedRoutes = FlowRouter.group({
    name: 'authenticated'
});

authenticatedRoutes.route('/author', {
    name: 'author',
    action: function() {
        BlazeLayout.render('defaultLayout', { main: 'author'});
    }
});
