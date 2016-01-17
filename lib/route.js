FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("enterLayout", {content: "login"});
    }
});
