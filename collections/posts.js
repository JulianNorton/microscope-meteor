
Posts = new Meteor.Collection('posts');

Meteor.methods({
  post: function(postAttributes) {
    var user = Meteor.user(),
    postWithSameLink = Posts.findOne({url:postAttributes.url});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post");

    // ensure the post has a title
    if (!postAttributes.title)
      throw new Meteor.Error(422, "The post needs a headline before it can be submitted");

    // check that there are no previous posts with the same link
    // '&&' the double ampersand will only evaluate the second argument if the first argument is true. 
    if (postAttributes.url && postWithSameLink) {
      throw new Meteor.Error(302, "This link has already been posted", postWithSameLink._id);
    }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'),
    {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var postId = Posts.insert(post);

    return postId;
  }
});



Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you're logged in
    // '!!' converts a value to a boolean and ensures a boolean type.
    // It's not returning the user ID, it's returning true/false on the user ID


    return !! userId;
  }
});

