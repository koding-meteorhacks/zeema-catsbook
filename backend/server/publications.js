Meteor.publish(null, function() {
  if(this.userId) {
    return Meteor.users.find(this.userId, {fields: {"emails[0].address": 1}});
  } else {
    this.ready();
  }
});

Meteor.publish(null, function () {
  return Pictures.find({}, {sort: {uploadedAt: -1}});
});