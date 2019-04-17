const PubSub = require('../helpers/pub_sub.js');

const BucketListItemView = function (container) {
  this.container = container;
};
// ​
BucketListItemView.prototype.render = function (bucketListItem) {
  const bucketListItemContainer = document.createElement("li");
  bucketListItemContainer.classList.add("bucket-list-item");
  const name = this.createHeading(bucketListItem.bucketListItem);
  bucketListItemContainer.appendChild(name);
//  console.log('details: ', bucketListItem.bucket_list_item_details);
  console.log('details: ', bucketListItem.bucketListItemDetails);
  const detailText = this.createDetail(bucketListItem.bucketListItemDetails);
//  ​const detailText = this.createDetail(bucketListItem.bucketListItemDetails);
  bucketListItemContainer.appendChild(detailText);
  // bucketListItemContainer.appendChild(detailText);

  // ​const deleteButton = this.createDeleteButton(bucketListItem._id);
  // bucketListItemContainer.appendChild(deleteButton);
 // ​this.container.appendChild(bucketListItemContainer);
 this.container.appendChild(bucketListItemContainer);
};

BucketListItemView.prototype.createHeading = function (textContent) {
  const heading = document.createElement("h3");
  heading.textContent = textContent;
  return heading;
};
// ​
BucketListItemView.prototype.createDetail = function (textContent) {
  const detail = document.createElement("p");
  detail.textContent = textContent;
  return detail;
};
// ​
// BucketListItemView.prototype.createDeleteButton = function (bucketListItemId) {
//   const button = document.createElement('button');
//   button.classList.add('delete-btn');
//   button.value = bucketListItemId;
//   ​
//   button.addEventListener('click', (evt) => {
//    PubSub.publish('BucketListItemView:delete-clicked', evt.target.value);
//   });
//   ​
//   return button;
// };
// ​
module.exports = BucketListItemView;
