const FormView = require('./views/form_view.js')
const ListView = require('./views/list_view.js');
const BucketList = require('./models/model.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketListForm = document.querySelector('form#bucket-list-form');
  const formView = new FormView(bucketListForm);
  formView.bindEvents();

  const bucketListContainer = document.querySelector('ul#bucket-list');
    const bucketListView = new ListView(bucketListContainer);
    bucketListView.bindEvents();

  const bucketList = new BucketList();
    bucketList.bindEvents();
    bucketList.getData();
});
