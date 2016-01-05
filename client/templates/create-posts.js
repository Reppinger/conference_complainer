Template.createPost.events({
   "submit .create-post-form": function(event) {
        event.preventDefault();
        var code = Session.get("activeConference");
        var content = $('.create-post-form input').val();
        Meteor.call("addPost", content, code);
   } 
});