var postsData = [
  {
    title: 'Introduction Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope'
  },

  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com',
  }
];

Template.postsList.helpers({
  posts: postsData
});