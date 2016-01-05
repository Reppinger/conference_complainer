Template.conference.events({
    "submit .conf-select-form": function(event) {
        event.preventDefault();
        var code = $(".conf-select-form input").val();
        Meteor.call("addConference", code, function(error, result) {
            if (error) {
                throw error;
            }
            Session.set("activeConference", result);
        });
    }
});