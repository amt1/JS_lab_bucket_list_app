const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:delete-clicked', (evt) => {
    this.deleteBucketListItem(evt.detail);
  });

  PubSub.subscribe('FormView:form-submitted', (evt) => {
    this.postBucketListItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', bucketList);
    })
    .catch(console.error);
};

BucketList.prototype.postBucketListItem = function (bucketListItem) {
  this.request.post(bucketListItem)
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', bucketList);
    })
    .catch(console.error);
};

BucketList.prototype.deleteBucketListItem = function (bucketListItemId) {
  this.request.delete(bucketListItemId)
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', games);
    })
    .catch(console.error);
};

module.exports = BucketList;
