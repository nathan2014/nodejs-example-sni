module.exports = {

  apiEndpoint: 'https://mybest.prismic.io/api/v2',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',
  
  snipcartKey: 'YWYwZTI4NjItNGMwZC00MDFkLTgwMmEtZGI2NGJjNjc3Yzk2NjM2Mzk5MTg1MzI4OTAxODg3',
  
  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function (doc) {
    if (doc.type == 'category') {
      return '/category/' + doc.uid;
    }
    if (doc.type == 'product') {
      return '/product/' + doc.uid;
    }
    return '/';
  }
};
