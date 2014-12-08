Meteor.publish(null, function () {
  return Pictures.find({}, {sort: {uploadedAt: -1}});
});