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
  },

  {
    title: 'Test title',
    author: 'Test author',
    url: 'http://placehold.it',
  }
];

Template.postsList.helpers({
  posts: postsData
});