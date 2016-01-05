Template.posts.helpers({
   "posts": function(){
       return Post.find({code: Session.get("activeConference")});
   } 
});

Template.posts.events({
   "click .upvote": function(event) {
       event.preventDefault();
       var postID = event.target.id;
       Meteor.call("upvote", postID);
   },
   "click .downvote": function(event) {
       event.preventDefault();
       var postID = event.target.id;
       Meteor.call("downvote", postID);
   }
   
});