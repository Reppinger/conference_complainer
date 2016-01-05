//server
Meteor.methods({
    "addConference": function(code) {
        var exists = Conference.findOne({code: code});
        if (exists) {
            return exists["_id"];
        } else {
            return Conference.insert({
                code: code,
                created: new Date()
            });
        }
    },
    "addPost": function(content, code) {
        Post.insert({
           content: content,
           code: code,
           votes: 0,
           created: new Date()
        });
    },
    "upvote": function(postID) {
        Post.update(postID, {$inc: {votes:1}});  
    },
    "downvote": function(postID) {
        Post.update(postID, {$inc: {votes:-1}});
    }
    
});