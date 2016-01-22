FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("defaultLayout", {content: "login"});
    }
});
