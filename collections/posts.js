
Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you're logged in
    // '!!' converts a value to a boolean and ensures a boolean type.
    // It's not returning the user ID, it's returning true/false on the user ID


    return !! userId;
  }
});

