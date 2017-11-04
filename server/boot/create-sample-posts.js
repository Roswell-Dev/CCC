'use strict';

module.exports = function (app) {
  app.dataSources.ccc_db.automigrate('post', function (err) {
    if (err) throw err;

    app.models.post.create([{
      title: 'Bel Cafe',
      content: 'Vancouver'
    }, {
      title: 'Three Bees Coffee House',
      content: 'San Mateo'
    }, {
      title: 'Caffe Artigiano',
      content: 'Vancouver'
    }, ], function (err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
