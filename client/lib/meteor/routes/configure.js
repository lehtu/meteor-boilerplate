FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('defaultLayout', {main: 'notFound'});
    }
};
