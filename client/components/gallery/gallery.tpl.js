var uploader = new Slingshot.Upload("fileUploads");

Template.gallery.rendered = function () {
  // ...
};
Template.gallery.events({
  'change #select-upload-pic': function (e) {
    // e.preventDefault();
    uploader.send($('#select-upload-pic').get(0).files[0], function (error, downloadUrl) {
      Pictures.insert({url: downloadUrl});
    });
    console.log(e)
  }
});

Template.gallery.helpers({
  progress: function () {
    return Math.round(uploader.progress() * 100);
  },
  pictures: function(){
    return Pictures.find({});
  }
});