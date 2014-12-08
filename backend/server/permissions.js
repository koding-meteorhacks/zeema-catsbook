Pictures.allow({
  insert: function(userId, doc) {
    if (userId) {
      doc.uploadedAt = new Date();
      return true;
    }
  },
  update: function(userId, doc, fields, modifier) {
    if (userId) {
      return true;
    }
  },
  remove: function(userId, doc) {
    if (userId) {
      return true;
    }
  }
});