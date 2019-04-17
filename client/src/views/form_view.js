const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucketListItem = this.createBucketListItem(evt.target);
  PubSub.publish('FormView:form-submitted', newBucketListItem);
  evt.target.reset();
};

FormView.prototype.createBucketListItem = function (form) {
  const newBucketListItem = {
    bucketListItem: form.bucket_list_item.value,
    bucketListItemDetails: form.bucket_list_item_details.value,
    }
    return newBucketListItem;

  };


module.exports = FormView;
