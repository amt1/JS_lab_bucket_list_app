const PubSub = require('../helpers/pub_sub.js');
const BucketListItemView = require('./detail_view.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

ListView.prototype.render = function (bucketList) {
  this.container.innerHTML = '';
  const bucketListItemView = new BucketListItemView(this.container);
  console.log('bucketList: ', bucketList);
  bucketList.forEach((bucketListItem) => bucketListItemView.render(bucketListItem));
};

module.exports = ListView;
